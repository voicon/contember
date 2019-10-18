import { Box, EditPage, SortableRepeater, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { LinkField, LocaleSideDimensionBase, SiteField } from '../components'

export const FooterPage = (
	<EditPage pageName={'footer'} entity={'Site'} where="(code = $site)" rendererProps={{ title: 'Footer' }}>
		<LocaleSideDimensionBase>
			<ToOne field="locales(code=$currentLocaleCode).footer">
				<Box heading={'Footer columns'}>
					<SortableRepeater sortBy={'order'} field={'columns'} removeType={'delete'}>
						<TextField name="title" label="Column title" />
						<ToOne field={'menu'}>
							<SiteField />
							<SortableRepeater sortBy={'order'} field={'items'} label={'Links in a column'} removeType={'delete'}>
								<TextField name="title" label="Link title" />
								<LinkField name={'link'} />
							</SortableRepeater>
						</ToOne>
					</SortableRepeater>
				</Box>
			</ToOne>
		</LocaleSideDimensionBase>
	</EditPage>
)
