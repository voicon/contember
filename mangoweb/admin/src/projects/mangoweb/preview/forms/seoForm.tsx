import { H2 } from '@blueprintjs/core'
import { TextAreaField, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { ImageField, LocaleSideDimension } from '../components'

export const seoForm = (
	<>
		<H2>Page SEO</H2>
		<ToOne field="seo">
			<ImageField name="ogImage" label="OG image" />
			<LocaleSideDimension>
				<TextAreaField name="$locale.description" label="Description" />
				<TextField name="$locale.description" label="OG title" />
				<TextAreaField name="$locale.description" label="OG description" />
			</LocaleSideDimension>
		</ToOne>
	</>
)
