import { EditPage, Repeater, SelectField, SortableRepeater, TextField } from 'cms-admin'
import * as React from 'react'
import { SiteField } from '../components'

export const ContactSalesPage = (
	<EditPage
		entity="Contact"
		pageName="contactSales"
		where="(site.code = $site)"
		rendererProps={{
			title: 'Contacts',
		}}
	>
		<SiteField />
		<Repeater field={'countries'} label={'Countries'}>
			<TextField label={'Country code (ISO 3166-2)'} name="code" size={'large'} />
			<SelectField label={'Dedicated site'} name="site" options="Site.code" allowNull={true} />
			<SortableRepeater sortBy={'order'} field={'people'} label={'Salesmen in country'}>
				<SelectField
					label={undefined}
					name="person"
					options="ContactPerson[department.contact.site.code=$site][department.type = sales].name"
				/>
			</SortableRepeater>
			<Repeater field={'regions'} label={'Regions'}>
				<TextField label={'Region code (ISO 3166-2)'} name="code" size={'large'} />
				<TextField label={'Name'} name="name" />
				<SortableRepeater sortBy={'order'} field={'people'} label={'Salesmen in region'}>
					<SelectField
						label={undefined}
						name="person"
						options="ContactPerson[department.contact.site.code=$site][department.type = sales].name"
					/>
				</SortableRepeater>
			</Repeater>
		</Repeater>
	</EditPage>
)
