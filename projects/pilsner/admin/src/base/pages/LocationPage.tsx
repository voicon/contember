import { Field, FieldText, ListPage, PageLinkButton, ToOne } from 'cms-admin'
import * as React from 'react'
import { EditButton, LocationTreeRenderer } from '../components'

export const LocationPage = (
	<ListPage
		pageName={'locations'}
		entity={'Location'}
		filter="[site.slug = $site]"
		renderer={LocationTreeRenderer}
		rendererProps={{
			title: 'Locations',
			actions: <PageLinkButton to="locationCreate">Add a new location</PageLinkButton>,
		}}
	>
		<FieldText name={'name'} />
		<ToOne field="parent">
			<Field name="name" />
		</ToOne>
		<EditButton pageName={'locationEdit'} label={'Edit'} />
	</ListPage>
)
