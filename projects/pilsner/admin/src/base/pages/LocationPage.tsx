import { Field, FieldText, ListPage, PageLinkButton, ToOne } from 'cms-admin'
import * as React from 'react'
import { EditButton, LocationTreeRenderer } from '../components'

export const LocationPage = (
	<ListPage
		pageName={'locations'}
		entityName={'Location'}
		filter="[site.slug = $site]"
		rendererProps={{
			title: 'Locations',
			actions: <PageLinkButton to="locationCreate">Add a new location</PageLinkButton>,
			wrapperComponent: LocationTreeRenderer,
		}}
	>
		<FieldText name={'name'} />
		<ToOne field="parent">
			<Field name="name" />
		</ToOne>
		<EditButton pageName={'locationEdit'} style={{ marginLeft: '.75em' }} />
	</ListPage>
)
