import { EditPage, ToOne } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton } from '../components'
import { LinkForm, SeoForm } from '../forms'

export const PourPage = (
	<EditPage
		pageName={'pour'}
		entity={'Site'}
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
