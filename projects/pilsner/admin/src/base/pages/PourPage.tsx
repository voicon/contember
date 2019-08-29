import { EditPage, ToOne } from 'cms-admin'
import * as React from 'react'
import { LinkForm, SeoForm } from '../forms'

export const PourPage = (
	<EditPage
		pageName={'pour'}
		entity={'Site'}
		where="(slug = $site)"
		rendererProps={{
			title: 'Pour page',
		}}
	>
		<ToOne field={'pourPage'}>
			<LinkForm />
			<SeoForm />
		</ToOne>
	</EditPage>
)
