import { Component, DateField } from 'cms-admin'
import * as React from 'react'

export const IsPublishedField = Component(() => {
	return <DateField name="publishedAt" label="Publish date" />
}, 'IsPublishedField')
