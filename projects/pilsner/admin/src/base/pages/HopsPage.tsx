import * as React from 'react'
import { EditPage, ToOne } from 'cms-admin'
import { GenericContentForm, LinkForm, SeoForm } from '../forms'

export const HopsPage = (
	<EditPage pageName={'hops'} entity={'Site'} where="(slug = $site)">
		<h1>Hops page</h1>
		<ToOne field={'hopsPage'}>
			<LinkForm />
			<GenericContentForm />
			<SeoForm />
		</ToOne>
	</EditPage>
)
