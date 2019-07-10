import * as React from 'react'
import { EditPage, SelectField, SortableRepeater, TextField, CheckboxField } from 'cms-admin'
import { getSite } from '../utils/environment'

export const MenuPage = (
	<EditPage pageName={'menu'} entity={'Menu'} where={({}, env) => ({ site: { slug: getSite(env) } })}>
		<h1>Menu</h1>

		<SortableRepeater sortBy={'order'} field={'items'}>
			<TextField name={'caption'} label={'Caption'} />
			<SelectField name={'link'} label={'link'} options={'Linkable.url'} />
			<CheckboxField name={'showCategories'} label={'Show categories'} />
		</SortableRepeater>
	</EditPage>
)
