#!/usr/bin/env node

import { CompositionRoot, readConfig } from 'cms-api'
import * as path from 'path'
import Quanti from './projects/quanti/src'
import Mangoweb from './projects/mangoweb/src/model'
import Blog from './projects/blog/src/model'
import Pilsner from './projects/pilsner/src/'
;(async () => {
	const configFile = path.join(__dirname, '../../src/config/config.yaml')
	const config = await readConfig(configFile)
	const projectsDirectory = path.join(__dirname, '../../src/projects')

	const container = new CompositionRoot().createMasterContainer(config, projectsDirectory, {
		quanti: Quanti,
		mangoweb: Mangoweb,
		blog: Blog,
		pilsner: Pilsner
	})

	container.cli.run(process.argv)
})().catch(e => {
	console.log(e)
	process.exit(1)
})
