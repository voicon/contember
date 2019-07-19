import * as React from 'react'
import { EditPage, ToOne } from 'cms-admin'
import { LinkForm, SeoForm } from '../forms'

export const PourPage = (
	<EditPage pageName={'pour'} entity={'Site'} where="(slug = $site)">
		<h1>Pour page</h1>
		<ToOne field={'pourPage'}>
			<LinkForm />
			<SeoForm />
		</ToOne>
	</EditPage>
)
