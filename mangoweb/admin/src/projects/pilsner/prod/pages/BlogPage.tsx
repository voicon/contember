import * as React from 'react'
import { FieldText, GenericPage } from 'cms-admin'
import { Grid, StandaloneEdit } from '../components'
import { LinkForm, SeoForm } from '../forms'
import { getSite } from '../utils/environment'

export const BlogPage = (
	<GenericPage pageName={'blog'}>
		<h1>Stories</h1>
		<div>
			<StandaloneEdit entityName={'BlogPage'} where={env => ({ site: { slug: getSite(env) } })}>
				<LinkForm />
				<SeoForm />
			</StandaloneEdit>
		</div>
		<Grid
			entityName={'Post'}
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
