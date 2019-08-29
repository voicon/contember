import { EditPage, ToOne } from 'cms-admin'
import * as React from 'react'
import { GenericContentForm, LinkForm, SeoForm } from '../forms'

export const HopsPage = (
	<EditPage
		pageName={'hops'}
		entity={'Site'}
		where="(slug = $site)"
		rendererProps={{
			title: 'Hops page',
		}}
	>
		<ToOne field={'hopsPage'}>
			<LinkForm />
			<GenericContentForm />
			<SeoForm />
		</ToOne>
	</EditPage>
)
