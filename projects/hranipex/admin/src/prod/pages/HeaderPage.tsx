import { Box, EditPage, SortableRepeater, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { LinkField, LocaleSideDimensionBase, SiteField } from '../components'

export const HeaderPage = (
	<EditPage pageName={'header'} entityName="Site" where="(code = $site)" rendererProps={{ title: 'Header' }}>
		<LocaleSideDimensionBase>
			<ToOne field="locales(code=$currentLocaleCode).header">
				<Box heading={'Left menu'}>
					<ToOne field={'leftMenu'}>
						<SiteField />
						<SortableRepeater sortBy={'order'} field={'items'} removeType={'delete'}>
							<TextField name="title" label="Title" />
							<LinkField name={'link'} />
						</SortableRepeater>
					</ToOne>
				</Box>
			</ToOne>
		</LocaleSideDimensionBase>

		<LocaleSideDimensionBase>
			<ToOne field="locales(code=$currentLocaleCode).header">
				<Box heading={'Right menu'}>
					<ToOne field={'rightMenu'}>
						<SiteField />
						<SortableRepeater sortBy={'order'} field={'items'} removeType={'delete'}>
							<TextField name="title" label="Title" />
							<LinkField name={'link'} />
						</SortableRepeater>
					</ToOne>
				</Box>
			</ToOne>
		</LocaleSideDimensionBase>
	</EditPage>
)
