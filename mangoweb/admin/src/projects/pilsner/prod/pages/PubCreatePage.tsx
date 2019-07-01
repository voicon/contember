import * as React from 'react'
import { CreatePage } from 'cms-admin'
import { PubForm } from '../forms'
import { SiteField } from '../components'

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
