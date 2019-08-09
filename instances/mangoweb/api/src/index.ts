#!/usr/bin/env node

import { CompositionRoot, readConfig } from 'cms-api'
import * as path from 'path'

import Quanti from '@mangoweb/contember-project-quanti-api'
import Mangoweb from '@mangoweb/contember-project-mangoweb-api'
import Blog from '@mangoweb/contember-project-sandbox-api'
import Pilsner from '@mangoweb/contember-project-pilsner-api'
import { Schema } from '@contember/schema'
;(async () => {
	const projects: { [name: string]: Schema } = {
		quanti: Quanti,
		mangoweb: Mangoweb,
		blog: Blog,
		pilsner: Pilsner,
	}

	const configFile = path.join(__dirname, '../../src/config/config.yaml')
	const config = await readConfig(configFile)
	const projectsDirectory = path.join(__dirname, '../../node_modules')

	const container = new CompositionRoot().createMasterContainer(config, projectsDirectory, projects)

	container.cli.run(process.argv)
})().catch(e => {
	console.log(e)
	process.exit(1)
})
