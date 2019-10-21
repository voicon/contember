#!/usr/bin/env node

import { run } from 'cms-api'
import * as path from 'path'

import Pilsner from '@mangoweb/contember-project-pilsner-api'
import { Schema } from '@contember/schema'
;(async () => {
	const projects: { [name: string]: Schema } = {
		pilsner: Pilsner,
	}

	const configFile = path.join(__dirname, '../../src/config/config.yaml')
	const projectsDirectory = path.join(__dirname, '../../node_modules')

	await run(configFile, projectsDirectory, projects)
})().catch(e => {
	console.log(e)
	process.exit(1)
})
