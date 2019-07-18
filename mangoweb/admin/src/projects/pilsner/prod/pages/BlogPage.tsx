import { FieldText, GenericPage, Literal } from 'cms-admin'
import * as React from 'react'
import { Grid, StandaloneEdit } from '../components'
import { LinkForm, SeoForm } from '../forms'

export const BlogPage = (
	<GenericPage pageName={'blog'}>
		<h1>Stories</h1>
		<div>
			<StandaloneEdit entityName={'BlogPage'} where="(site.slug = $site)">
				<LinkForm />
				<SeoForm />
			</StandaloneEdit>
		</div>
		<Grid
			entityName="Post"
			orderBy={[{ title: new Literal('asc') }]}
			createButton={{
				pageName: 'blogCreate',
				label: 'Create post'
			}}
			editButton={{
				pageName: 'blogEdit'
			}}
		>
			<FieldText name="title" />
		</Grid>
	</GenericPage>
)
