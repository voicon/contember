import blogModel from './projects/blog/src/model'
import mangowebModel from './projects/mangoweb/src/model'
import { CompositionRoot, parseConfig, Project } from 'cms-api'
import * as fs from 'fs'
import * as path from 'path'
import { promisify } from 'util'
import { Schema } from 'cms-common'
;(async () => {
	const fsRead = promisify(fs.readFile)

	const file = await fsRead(path.dirname(__filename) + '/../../src/config/config.yaml', { encoding: 'utf8' })
	const config = parseConfig(file)

	const schemaMap: { [projectSlug: string]: Schema } = {
		blog: blogModel,
		mangoweb: mangowebModel
	}

	const projects: Array<Project> = config.projects.map(project => ({
		...project,
		stages: project.stages.map(stage => ({
			...stage,
			schema: schemaMap[project.slug]
		}))
	}))

	const compositionRoot = new CompositionRoot()
	const httpServer = compositionRoot.composeServer(config.tenant.db, projects)
	httpServer.listen(Number.parseInt(String(config.server.port)), () => {
		console.log(`Tenant API running on http://localhost:${config.server.port}/tenant`)
		projects.forEach(project => {
			project.stages.forEach(stage => {
				const url = `http://localhost:${config.server.port}/content/${project.slug}/${stage.slug}`
				console.log(`Content API for project ${project.slug} and stage ${stage.slug} running on ${url}`)
			})
		})
	})
})().catch(e => {
	console.log(e)
	process.exit(1)
})
