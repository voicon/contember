import * as React from 'react'
import { H2 } from '@blueprintjs/core'
import { Component, TextField, FieldName } from 'cms-admin'
import { Image } from './Image'

export interface SeoProps {
	name: FieldName
}

export const Seo = Component<SeoProps>(
	props => (
		<>
			<H2>SEO</H2>
			<TextField label="Title" name={`${props.name}.title`} />
			<TextField label="Description" name={`${props.name}.description`} />
			<TextField label="Facebook title" name={`${props.name}.ogTitle`} />
			<TextField label="Facebook description" name={`${props.name}.ogDescription`} />
			<Image label="Facebook image" name={`${props.name}.ogImage`} />
		</>
	),
	'Seo',
)
