import { Component, TextField } from 'cms-admin'
import * as React from 'react'

export const LinkForm = Component(() => {
	return <TextField name="link.url" label="URL" />
}, 'LinkForm')
