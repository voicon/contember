import * as knex from 'knex'
import blogModel from './projects/blog/src/model'
import { CompositionRoot, getSqlSchema, parseConfig, Project } from 'cms-api'
import * as fs from 'fs'
import * as path from 'path'
import { promisify } from 'util';

(async () => {
	const fsRead = promisify(fs.readFile)

	const file = await fsRead(path.dirname(__filename) + '/../../src/config/config.yaml', { encoding: 'utf8' })
	const config = parseConfig(file)

	const projects: Array<Project> = config.projects.map(project => (
		{
			...project,
			stages: project.stages.map(stage => ({
				...stage,
				schema: blogModel,
			}))
		}))

	projects.forEach(project => {
		project.stages.forEach(stage => {
			const pgSchemaName = 'public' // TODO: should depend on stage
			const sql = getSqlSchema(stage.schema.model)

			const db = knex({
				debug: false,
				client: 'pg',
				connection: {
					host: project.dbCredentials.host,
					port: project.dbCredentials.port,
					user: project.dbCredentials.user,
					password: project.dbCredentials.password,
					database: project.dbCredentials.database
				}
			})

			console.log(`Rebuilding schema ${project.dbCredentials.database}.${pgSchemaName}`)
			db.transaction(async () => {
				await db.raw(`DROP SCHEMA IF EXISTS ${pgSchemaName} CASCADE`)
				await db.raw(`CREATE SCHEMA ${pgSchemaName}`)
				await db.raw(sql)
				await db.raw(
					await fsRead(path.join(__dirname, `../../src/projects/${project.slug}/src/data.sql`), { encoding: 'utf8' })
				)
			})
		})
	})

	const compositionRoot = new CompositionRoot()
	const httpServer = compositionRoot.composeServer(config.tenant.db, projects)
	httpServer.listen(Number.parseInt(String(config.server.port)), () => {
		console.log(`Tenant API running on http://localhost:${config.server.port}/tenant`)
		projects.forEach(project => {
			project.stages.forEach(stage => {
				console.log(
					`Content API for project ${project.slug} and stage ${stage.slug} running on http://localhost:${
						config.server.port
					}/content/${project.slug}/${stage.slug}`
				)
			})
		})
	})
})()
	.catch(e => {
		console.log(e)
		process.exit(1)
	})
