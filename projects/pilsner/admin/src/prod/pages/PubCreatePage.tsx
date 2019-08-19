import { CreatePage } from 'cms-admin'
import * as React from 'react'
import { SiteField } from '../components'
import { PubForm, PubFormSide } from '../forms'

export const PubCreatePage = (
	<CreatePage
		entity="Pub"
		pageName={'pubCreate'}
		rendererProps={{
			title: 'Add a new pub',
			side: <PubFormSide />,
			onlyOneInCollection: true,
		}}
	>
		<SiteField />
		<PubForm />
	</CreatePage>
)
