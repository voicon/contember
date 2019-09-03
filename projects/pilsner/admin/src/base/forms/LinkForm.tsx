import { Component, TextField, Box } from 'cms-admin'
import * as React from 'react'

export const LinkForm = Component(() => {
	return (
		<Box>
			<TextField name="link.url" label="URL" />
		</Box>
	)
}, 'LinkForm')
