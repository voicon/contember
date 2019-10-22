import { EditPage, SortableRepeater, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { LinkField, LocaleSideDimension, SiteField } from '../components'

export const HeaderPage = (
	<EditPage pageName={'header'} entityName="Site" where="(code = $site)" rendererProps={{ title: 'Header' }}>
		<LocaleSideDimension toOneField="locales(code=$currentLocaleCode).header.leftMenu">
			<SiteField />
			<SortableRepeater sortBy={'order'} field={'items'} label="Left menu" removeType="delete">
				<TextField name="title" label="Title" />
				<LinkField name={'link'} label="Link" />
			</SortableRepeater>
		</LocaleSideDimension>

		<LocaleSideDimension toOneField="locales(code=$currentLocaleCode).header.rightMenu">
			<SortableRepeater sortBy={'order'} field={'items'} label="Right menu" removeType="delete">
				<TextField name="title" label="Title" />
				<LinkField name={'link'} label="Link" />
			</SortableRepeater>
		</LocaleSideDimension>
	</EditPage>
)
