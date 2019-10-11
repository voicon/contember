import { CreatePage, NavigateBackButton } from 'cms-admin'
import * as React from 'react'
import { SiteField } from '../components'
import { TapsterForm, TapsterFormSide } from '../forms'

export const TapsterCreatePage = (
	<CreatePage
		entityName="Tapster"
		pageName={'tapsterCreate'}
		rendererProps={{
			title: 'Add a new tapster',
			side: <TapsterFormSide />,
			navigation: <NavigateBackButton to="tapsterList">Tapsters</NavigateBackButton>,
		}}
		redirectOnSuccess={request => ({ ...request, pageName: 'tapsterList' })}
	>
		<SiteField />
		<TapsterForm />
	</CreatePage>
)
