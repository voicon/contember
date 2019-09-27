import { EditPage, SortableRepeater, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { LinkField, LocaleSideDimensionBase, SiteField } from '../components'

export const FooterPage = (
	<EditPage pageName={'footer'} entity={'Site'} where="(code = $site)" rendererProps={{ title: 'Footer' }}>
		<LocaleSideDimensionBase>
			<ToOne field="locales(code=$currentLocaleCode)">
				<ToOne field={'footer'}>
					<h3>Columns</h3>
					<SortableRepeater sortBy={'order'} field={'columns'}>
						<TextField name="title" label="Title" />
						<ToOne field={'menu'}>
							<SiteField />
							<SortableRepeater sortBy={'order'} field={'items'}>
								<TextField name="title" label="Title" />
								<LinkField name={'link'} />
							</SortableRepeater>
						</ToOne>
					</SortableRepeater>
				</ToOne>
			</ToOne>
		</LocaleSideDimensionBase>
	</EditPage>
)
