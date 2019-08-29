import { CreatePage } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton, SiteField } from '../components'
import { PubForm, PubFormSide } from '../forms'

export const PubCreatePage = (
	<CreatePage
		entity="Pub"
		pageName={'pubCreate'}
		rendererProps={{
			title: 'Add a new pub',
			side: <PubFormSide />,
			onlyOneInCollection: true,
			navigation: <NavigateBackButton to="pubList">Pubs</NavigateBackButton>,
		}}
		redirectOnSuccess={request => ({ ...request, pageName: 'pubList' })}
	>
		<SiteField />
		<PubForm />
	</CreatePage>
)
