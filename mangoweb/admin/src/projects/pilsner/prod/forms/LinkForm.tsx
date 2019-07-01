import { H2 } from '@blueprintjs/core'
import { Component, TextField, ToOne } from 'cms-admin'
import * as React from 'react'

export const LinkForm = Component(() => {
	return (
		<div>
			<H2>URL</H2>
			<ToOne field="link">
				<TextField name="url" label="URL" />
			</ToOne>
		</div>
	)
}, 'LinkForm')
