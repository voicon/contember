import { FieldText, GenericPage, Literal } from 'cms-admin'
import * as React from 'react'
import { Grid } from '../components'

export const TagPage = (
	<GenericPage pageName={'tags'}>
		<h1>Tags</h1>
		<Grid
			entityName="Tag"
			orderBy={[{ name: new Literal('asc') }]}
			filter="[site.slug = $site]"
			createButton={{
				pageName: 'tagCreate',
				label: 'Create tag'
			}}
			editButton={{
				pageName: 'tagEdit'
			}}
		>
			<FieldText name="name" />
		</Grid>
	</GenericPage>
)
