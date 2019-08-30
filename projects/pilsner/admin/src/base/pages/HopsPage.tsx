import { EditPage, ToOne } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton } from '../components'
import { GenericContentForm, LinkForm, SeoForm } from '../forms'

export const HopsPage = (
	<EditPage
		pageName={'hops'}
		entity={'Site'}
		where="(slug = $site)"
		rendererProps={{
			title: 'Hops page',
			navigation: <NavigateBackButton to="pageList">Pages</NavigateBackButton>,
		}}
	>
		<ToOne field={'hopsPage'}>
			<LinkForm />
			<GenericContentForm />
			<SeoForm />
		</ToOne>
	</EditPage>
)
