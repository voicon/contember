import { Field, FieldText, ListPage, ToOne } from 'cms-admin'
import * as React from 'react'
import { CreateButton, EditButton, LocationTreeRenderer } from '../components'

export const LocationPage = (
	<ListPage
		pageName={'locations'}
		entity={'Location'}
		filter="[site.slug = $site]"
		renderer={LocationTreeRenderer}
		rendererProps={{
			title: 'Locations',
			actions: <CreateButton pageName="locationCreate" label="Create location" />,
		}}
	>
		<FieldText name={'name'} />
		<ToOne field="parent">
			<Field name="name" />
		</ToOne>
		<EditButton pageName={'locationEdit'} label={'Edit'} />
	</ListPage>
)
