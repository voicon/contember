import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { root } from 'cms-admin'
import '../../src/index.sass'

window.addEventListener('DOMContentLoaded', function() {
	const el = document.getElementById('root')
	if (!el) {
		return
	}
	ReactDOM.render(root, el)
})
