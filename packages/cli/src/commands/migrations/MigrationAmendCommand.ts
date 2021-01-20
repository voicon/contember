import { Command, CommandConfiguration, Input } from '../../cli'
import { Schema } from '@contember/schema'
import { printValidationErrors } from '../../utils/schema'
import { InvalidSchemaException } from '@contember/schema-migrations'
import { executeCreateMigrationCommand } from './MigrationCreateHelper'
import { createMigrationStatusTable, getLatestMigration, printMigrationDescription } from '../../utils/migrations'
import { executeMigrations, resolveMigrationStatus } from './MigrationExecuteHelper'
import { resolveLocalSystemApiClient } from './SystemApiClientResolver'
import prompts from 'prompts'

type Args = {
	project: string
}

type Options = {
	instance?: string
	yes?: true
}

export class MigrationAmendCommand extends Command<Args, Options> {
	protected configure(configuration: CommandConfiguration<Args, Options>): void {
		configuration.description('Amends latest migration')
		configuration.argument('project')
		configuration //
			.option('instance')
			.valueRequired()
			.description('Local instance name')
		configuration //
			.option('yes')
			.valueNone()
			.description('Do not ask for confirmation.')
	}

	protected async execute(input: Input<Args, Options>): Promise<number> {
		return await executeCreateMigrationCommand(
			input,
			async ({
				schemaVersionBuilder,
				migrationsResolver,
				workspace,
				project,
				migrationCreator,
				migrationDescriber,
			}) => {
				const latestMigration = await getLatestMigration(migrationsResolver)
				if (!latestMigration) {
					throw 'No migration to amend'
				}
				const client = await resolveLocalSystemApiClient(workspace, project, input)
				const status = await resolveMigrationStatus(client, migrationsResolver)
				if (status.errorMigrations.length > 0) {
					console.error(createMigrationStatusTable(status.errorMigrations))
					throw `Cannot execute migrations`
				}
				if (status.migrationsToExecute.length > 0) {
					throw `Some migrations are not executed. Unable to amend.`
				}
				// eslint-disable-next-line @typescript-eslint/no-var-requires
				const schema: Schema = require(project.apiDir).default
				try {
					const initialSchema = await schemaVersionBuilder.buildSchema()
					const intermediateResult = await migrationCreator.prepareMigration(initialSchema, schema, '')

					const prevSchema = await schemaVersionBuilder.buildSchemaUntil(latestMigration.version)
					const newMigrationResult = await migrationCreator.prepareMigration(prevSchema, schema, '')

					if (intermediateResult === null) {
						console.log('Nothing to do')
						return 0
					}
					await printMigrationDescription(
						migrationDescriber,
						intermediateResult.initialSchema,
						intermediateResult.migration,
						{ noSql: true },
					)
					if (!(await this.shouldContinue(input))) {
						console.log('Aborting')
						return 1
					}
					await client.migrate([intermediateResult.migration])
					await client.migrationDelete(intermediateResult.migration.version)

					if (!newMigrationResult) {
						await migrationCreator.removeMigration(latestMigration.name)
						await client.migrationDelete(latestMigration.version)
						console.log('Latest migration was removed')
						return 0
					}
					const newMigration = {
						name: latestMigration.name,
						version: latestMigration.version,
						formatVersion: newMigrationResult.migration.formatVersion,
						modifications: newMigrationResult.migration.modifications,
					}
					await migrationCreator.saveMigration(newMigration)
					await client.migrationModify(latestMigration.version, newMigration)

					return 0
				} catch (e) {
					if (e instanceof InvalidSchemaException) {
						printValidationErrors(e.validationErrors, e.message)
						return 1
					}
					throw e
				}
			},
		)
	}

	private async shouldContinue(input: Input<{}, { yes?: true }>): Promise<boolean> {
		const yes = input.getOption('yes')
		if (yes) {
			return true
		}
		const { action } = await prompts({
			type: 'select',
			name: 'action',
			message: 'Do you want to continue?',
			choices: [
				{ value: 'yes', title: 'Yes' },
				{ value: 'no', title: 'Abort' },
			],
		})
		return action === 'yes'
	}
}
