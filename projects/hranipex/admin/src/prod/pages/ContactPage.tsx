import { Box, EditPage, Literal, PageLinkButton, SelectField, SortableRepeater, TextField } from 'cms-admin'
import * as React from 'react'
import { ImageField, LocaleSideDimension, SiteField } from '../components'

export const ContactPage = (
	<EditPage
		entityName="Contact"
		pageName="contact"
		where="(site.code = $site)"
		rendererProps={{
			title: 'Contacts',
		}}
	>
		<PageLinkButton to="contactSales">Sales regions</PageLinkButton>
		<SiteField />
		<Box heading={'Basic contact info'}>
			<LocaleSideDimension>
				<TextField label={'Info'} name="info" allowNewlines={true} />
				<SortableRepeater sortBy={'order'} field={'items'} removeType={'delete'}>
					<TextField label={'Label'} name="key" />
					<TextField label={'Value'} name="value" />
				</SortableRepeater>
			</LocaleSideDimension>
		</Box>
		<SortableRepeater sortBy={'order'} field={'departments'} label={'Departments'} removeType={'delete'}>
			<LocaleSideDimension>
				<TextField label={'Name'} name="name" size={'large'} />
			</LocaleSideDimension>
			<SelectField
				options={[
					{ value: new Literal('sales'), label: 'Sales' },
					{ value: new Literal('management'), label: 'Management' },
				]}
				allowNull={true}
				name={'type'}
				label={'Type'}
			/>
			<SortableRepeater sortBy={'order'} field={'people'} label={'People'} removeType={'delete'}>
				<TextField label={'Name'} name="name" />
				<TextField label={'Phone'} name="phone" />
				<TextField label={'E-mail'} name="email" />
				<ImageField label={'Image'} name="image" />
				<LocaleSideDimension>
					<TextField label={'Job title'} name="jobTitle" />
				</LocaleSideDimension>
			</SortableRepeater>
		</SortableRepeater>
	</EditPage>
)
