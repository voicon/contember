import * as knex from 'knex'
import blogModel from './projects/blog/src/model'
import { CompositionRoot, Env, getSqlSchema, Project } from 'cms-api'
import * as fs from 'fs'
import * as path from 'path'
import { promisify } from 'util'
;(async () => {
	const fsRead = promisify(fs.readFile)

	const env = Env.fromUnsafe(process.env)

	const projects: Array<Project> = [
		{
			uuid: '1635399a-de76-4101-bd14-82d67e9d2574',
			slug: 'blog',
			name: 'Blog',

			stages: [
				{
					uuid: '01c8f908-6f48-4ef3-9751-9989931b42eb',
					slug: 'prod',
					name: 'Production',
					schema: blogModel,
					migration: ''
				}
			],

			dbCredentials: {
				host: env.DB_HOST,
				port: Number.parseInt(env.DB_PORT),
				user: env.DB_USER,
				password: env.DB_PASSWORD,
				database: env.DB_DATABASE
			}
		}
	]

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
	const httpServer = compositionRoot.composeServer(env, projects)
	httpServer.listen(Number.parseInt(env.SERVER_PORT), () => {
		console.log(`Tenant API running on http://localhost:${env.SERVER_PORT}/tenant`)
		projects.forEach(project => {
			project.stages.forEach(stage => {
				console.log(
					`Content API for project ${project.slug} and stage ${stage.slug} running on http://localhost:${
						env.SERVER_PORT
					}/content/${project.slug}/${stage.slug}`
				)
			})
		})
	})
})()
