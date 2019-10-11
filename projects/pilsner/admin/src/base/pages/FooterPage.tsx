import {
	EditPage,
	Literal,
	SelectField,
	SortableRepeater,
	TextField,
	ToOne,
	Box,
	DiscriminatedBlocks,
	Block,
} from 'cms-admin'
import * as React from 'react'

export const FooterPage = (
	<EditPage
		pageName={'footer'}
		entityName={'Site'}
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
					<DiscriminatedBlocks name="linkType" label={undefined}>
						<Block discriminateBy="external" label="External">
							<TextField name="linkUrl" label="URL" />
						</Block>
						<Block discriminateBy="internal" label="Internal">
							<SelectField name="link" label="Link" options="Linkable.url" />
						</Block>
					</DiscriminatedBlocks>
				</SortableRepeater>
			</Box>
		</ToOne>
	</EditPage>
)
