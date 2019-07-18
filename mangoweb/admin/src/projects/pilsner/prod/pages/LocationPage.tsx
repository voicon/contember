import { FieldText, ListPage } from 'cms-admin'
import * as React from 'react'
import { CreateButton, EditButton } from '../components'
import { LocationTreeRenderer } from '../components/LocationTreeRenderer'

export const LocationPage = (
	<ListPage
		pageName={'locations'}
		entity={'Location'}
		renderer={LocationTreeRenderer}
		rendererProps={{
			title: 'Locations',
			beforeContent: <CreateButton pageName={'locationCreate'} label={'Create location'} />
		}}
	>
		<FieldText name={'name'} />
		<FieldText name={'parent.name'} formatter={() => null} />
		<EditButton pageName={'locationEdit'} label={'Edit'} />
	</ListPage>
)
