import { Box, EditPage, SortableRepeater, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { LinkField, LocaleSideDimension, SiteField } from '../components'

export const FooterPage = (
	<EditPage pageName={'footer'} entityName={'Site'} where="(code = $site)" rendererProps={{ title: 'Footer' }}>
		<LocaleSideDimension toOneField="locales(code=$currentLocaleCode).footer">
			<SortableRepeater sortBy={'order'} field={'columns'} label="Footer columns" removeType={'delete'}>
				<TextField name="title" label="Column title" />
				<ToOne field={'menu'}>
					<SiteField />
					<SortableRepeater sortBy={'order'} field={'items'} label={'Links in a column'} removeType={'delete'}>
						<TextField name="title" label="Link title" />
						<LinkField name={'link'} />
					</SortableRepeater>
				</ToOne>
			</SortableRepeater>
		</LocaleSideDimension>
	</EditPage>
)
