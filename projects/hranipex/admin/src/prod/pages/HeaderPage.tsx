import { EditPage, SortableRepeater, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { LinkField, LocaleSideDimensionBase, SiteField } from '../components'

export const HeaderPage = (
	<EditPage pageName={'header'} entity={'Site'} where="(code = $site)" rendererProps={{ title: 'Header' }}>
		<LocaleSideDimensionBase>
			<ToOne field="locales(code=$currentLocaleCode)">
				<ToOne field={'header'}>
					<h3>Left menu</h3>
					<ToOne field={'leftMenu'}>
						<SiteField />
						<SortableRepeater sortBy={'order'} field={'items'}>
							<TextField name="title" label="Title" />
							<LinkField name={'link'} />
						</SortableRepeater>
					</ToOne>
					<h3>Right menu</h3>
					<ToOne field={'rightMenu'}>
						<SiteField />
						<SortableRepeater sortBy={'order'} field={'items'}>
							<TextField name="title" label="Title" />
							<LinkField name={'link'} />
						</SortableRepeater>
					</ToOne>
				</ToOne>
			</ToOne>
		</LocaleSideDimensionBase>
	</EditPage>
)
