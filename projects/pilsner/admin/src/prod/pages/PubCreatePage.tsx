import { CreatePage } from 'cms-admin'
import * as React from 'react'
import { SiteField } from '../components'
import { PubForm } from '../forms'

export const PubCreatePage = (
	<CreatePage
		entity="Pub"
		pageName={'pubCreate'}
		rendererProps={{
			title: 'Add new pub'
		}}
	>
		<SiteField />
		<PubForm />
	</CreatePage>
)
