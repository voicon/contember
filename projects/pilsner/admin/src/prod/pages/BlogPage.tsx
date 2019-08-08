import { FieldText, GenericPage, Literal, ToOne } from 'cms-admin'
import * as React from 'react'
import { Grid, StandaloneEdit } from '../components'
import { LinkForm, SeoForm } from '../forms'

export const BlogPage = (
	<GenericPage pageName={'blog'}>
		<h1>Stories</h1>
		<div>
			<StandaloneEdit entityName={'Site'} where="(slug = $site)">
				<ToOne field={'blogPage'}>
					<LinkForm />
					<SeoForm />
				</ToOne>
			</StandaloneEdit>
		</div>
		<Grid
			entityName="Post"
			orderBy={[{ title: new Literal('asc') }]}
			filter="[site.slug = $site]"
			createButton={{
				pageName: 'blogCreate',
				label: 'Create post',
			}}
			editButton={{
				pageName: 'blogEdit',
			}}
		>
			<FieldText name="title" />
		</Grid>
	</GenericPage>
)
