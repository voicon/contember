import { CommandConfiguration, Input } from '../../cli'
import { MigrationsContainerFactory } from '../../MigrationsContainer'
import {
	MigrationCreator,
	MigrationDescriber,
	MigrationsResolver,
	SchemaVersionBuilder,
} from '@contember/schema-migrations'
import { Workspace } from '../../utils/Workspace'
import path from 'path'
import { Project } from '../../utils/Project'

type Args = {
	project: string
	migrationName: string
}

type Options = {}

export const configureCreateMigrationCommand = (configuration: CommandConfiguration<Args, Options>) => {
	configuration.argument('project')
	configuration.argument('migrationName')
}

export const executeCreateMigrationCommand = async (
	input: Input<Pick<Args, 'project'>, Options>,
	createMigrationCallback: (args: {
		workspace: Workspace
		project: Project
		migrationCreator: MigrationCreator
		migrationDescriber: MigrationDescriber
		migrationsResolver: MigrationsResolver
		schemaVersionBuilder: SchemaVersionBuilder
	}) => Promise<number>,
) => {
	const projectName = input.getArgument('project')
	const workspace = await Workspace.get(process.cwd())
	const allProjects = projectName === '.'
	const projects = allProjects
		? await workspace.projects.listProjects()
		: [await workspace.projects.getProject(projectName, { fuzzy: true })]

	for (const project of projects) {
		console.group(`Project ${project.name}:`)
		const container = new MigrationsContainerFactory(project.migrationsDir).create()

		const result = await createMigrationCallback({
			project,
			migrationCreator: container.migrationCreator,
			migrationDescriber: container.migrationDescriber,
			migrationsResolver: container.migrationsResolver,
			schemaVersionBuilder: container.schemaVersionBuilder,
			workspace,
		})
		console.groupEnd()
		if (result > 0) {
			return result
		}
	}
	return 0
}
