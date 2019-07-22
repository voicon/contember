import { CheckboxField, EditPage, SelectField, SortableRepeater, TextField, ToOne } from 'cms-admin'
import * as React from 'react'

export const MenuPage = (
	<EditPage pageName={'menu'} entity={'Site'} where="(slug = $site)">
		<h1>Menu</h1>
		<ToOne field={'menu'}>
			<SortableRepeater sortBy={'order'} field={'items'}>
				<TextField name={'caption'} label={'Caption'} />
				<SelectField name={'link'} label={'link'} options={'Linkable.url'} />
				<CheckboxField name={'showCategories'} label={'Show categories'} />
			</SortableRepeater>
		</ToOne>
	</EditPage>
)
