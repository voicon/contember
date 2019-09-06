import { AlternativeFields, EditPage, Literal, SelectField, SortableRepeater, TextField, ToOne, Box } from 'cms-admin'
import * as React from 'react'

export const FooterPage = (
	<EditPage
		pageName={'footer'}
		entity={'Site'}
		where="(slug = $site)"
		rendererProps={{
			title: 'Footer',
		}}
	>
		<ToOne field={'footer'}>
			<Box heading="Contact us">
				<TextField name={'contactLabel'} label={'Label'} />
				<TextField name={'contactLink'} label={'Link'} />
			</Box>

			<Box heading="Copyright">
				<TextField name={'copyright'} label={undefined} />
				<TextField name={'copyrightJap'} label={'JAP version only'} allowNewlines={true} />
			</Box>

			<Box heading="Don't drink and drive">
				<TextField name={'dontDriveSticky'} label={'Sticky'} />
				<TextField name={'dontDriveHeading'} label={'Main text'} />
				<TextField name={'dontDriveLink'} label={'Link'} />
			</Box>

			<Box heading="Links">
				<SortableRepeater sortBy={'order'} field={'links'} removeType={'delete'}>
					<TextField name={'caption'} label="Caption" />
					<AlternativeFields
						name="linkType"
						label={undefined}
						alternatives={[
							[
								new Literal('external'),
								'External',
								<>
									<TextField name={'linkUrl'} label={'URL'} />
								</>,
							],
							[
								new Literal('internal'),
								'Internal',
								<>
									<SelectField name={'link'} label={'link'} options={'Linkable.url'} />
								</>,
							],
						]}
					/>
				</SortableRepeater>
			</Box>
		</ToOne>
	</EditPage>
)
