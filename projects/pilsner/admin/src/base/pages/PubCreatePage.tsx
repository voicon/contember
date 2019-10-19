import { CreatePage, NavigateBackButton } from 'cms-admin'
import * as React from 'react'
import { SiteField } from '../components'
import { PubForm, PubFormSide } from '../forms'

export const PubCreatePage = (
	<CreatePage
		entityName="Pub"
		pageName={'pubCreate'}
		rendererProps={{
			title: 'Add a new pub',
			side: <PubFormSide />,
			navigation: <NavigateBackButton to="pubList">Pubs</NavigateBackButton>,
		}}
		redirectOnSuccess={request => ({ ...request, pageName: 'pubList' })}
	>
		<SiteField />
		<PubForm />
	</CreatePage>
)
