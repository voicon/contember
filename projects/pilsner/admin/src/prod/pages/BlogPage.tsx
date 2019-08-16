import { GenericPage, ToOne } from 'cms-admin'
import * as React from 'react'
import { StandaloneEdit } from '../components'
import { LinkForm, SeoForm } from '../forms'

export const BlogPage = (
	<GenericPage pageName={'blogPage'}>
		<h1>Stories Page</h1>
		<div>
			<StandaloneEdit entityName={'Site'} where="(slug = $site)">
				<ToOne field={'blogPage'}>
					<LinkForm />
					<SeoForm />
				</ToOne>
			</StandaloneEdit>
		</div>
	</GenericPage>
)
