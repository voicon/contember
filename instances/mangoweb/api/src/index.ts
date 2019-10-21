#!/usr/bin/env node

import { run } from 'cms-api'
import * as path from 'path'

import Quanti from '@mangoweb/contember-project-quanti-api'
import Mangoweb from '@mangoweb/contember-project-mangoweb-api'
import Blog from '@mangoweb/contember-project-sandbox-api'
import Pilsner from '@mangoweb/contember-project-pilsner-api'
import Hranipex from '@mangoweb/contember-project-hranipex-api'
import { Schema } from '@contember/schema'
;(async () => {
	const projects: { [name: string]: Schema } = {
		quanti: Quanti,
		mangoweb: Mangoweb,
		blog: Blog,
		pilsner: Pilsner,
		hranipex: Hranipex,
	}

	const configFile = path.join(__dirname, '../../src/config/config.yaml')
	const projectsDirectory = path.join(__dirname, '../../node_modules')

	await run(configFile, projectsDirectory, projects)
})().catch(e => {
	console.log(e)
	process.exit(1)
})
