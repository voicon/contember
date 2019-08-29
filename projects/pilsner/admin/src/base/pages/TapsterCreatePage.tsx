import { CreatePage } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton, SiteField } from '../components'
import { TapsterForm, TapsterFormSide } from '../forms'

export const TapsterCreatePage = (
	<CreatePage
		entity="Tapster"
		pageName={'tapsterCreate'}
		rendererProps={{
			title: 'Add a new tapster',
			side: <TapsterFormSide />,
			onlyOneInCollection: true,
			navigation: <NavigateBackButton to="tapsterList">Tapsters</NavigateBackButton>,
		}}
		redirectOnSuccess={request => ({ ...request, pageName: 'tapsterList' })}
	>
		<SiteField />
		<TapsterForm />
	</CreatePage>
)
