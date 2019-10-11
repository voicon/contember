import { EditPage, NavigateBackButton, ToOne } from 'cms-admin'
import * as React from 'react'
import { LinkForm, SeoForm } from '../forms'

export const PourPage = (
	<EditPage
		pageName={'pour'}
		entityName={'Site'}
		where="(slug = $site)"
		rendererProps={{
			title: 'Pour page',
			navigation: <NavigateBackButton to="pageList">Pages</NavigateBackButton>,
		}}
	>
		<ToOne field={'pourPage'}>
			<LinkForm />
			<SeoForm />
		</ToOne>
	</EditPage>
)
