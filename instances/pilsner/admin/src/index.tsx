import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Admin } from 'cms-admin'
import '../../src/index.sass'
import projects from './projects'

const reactRoot = (config: any) => <Admin config={config} configs={projects} />

window.addEventListener('DOMContentLoaded', function() {
	const el = document.getElementById('root')
	if (!el) {
		return
	}
	const configEl = document.getElementById('admin-config')
	if (!configEl) {
		return
	}
	const config = JSON.parse(configEl.innerHTML)
	ReactDOM.render(reactRoot(config), el)
})
