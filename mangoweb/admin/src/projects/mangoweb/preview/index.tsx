import { Callout, H1, Intent } from '@blueprintjs/core'
import {
	CreatePage,
	EditPage,
	FieldText,
	GenericPage,
	MultiEditPage,
	NumberField,
	PageLinkById,
	Pages
} from 'cms-admin'
import * as React from 'react'

import { Layout } from './adminLayout'
import contactLocationForm from './forms/contactLocationForm'
import frontPageForm from './forms/frontPageForm'
import personForm from './forms/personForm'

export default (
	<Pages project="mangoweb" stage="prod" layout={Layout}>
		<GenericPage pageName="dashboard">
			<H1>manGoweb admin</H1>
			<Callout intent={Intent.WARNING} title="Warning">
				<p>Don't forget to choose a language first!</p>
			</Callout>
		</GenericPage>

		<EditPage
			entity="FrontPage"
			rendererProps={{
				title: 'Front Page'
			}}
		>
			{frontPageForm}
		</EditPage>

		<MultiEditPage
			entity="ContactLocation"
			rendererProps={{
				title: 'Contact Locations'
			}}
		>
			{contactLocationForm}
		</MultiEditPage>

		<MultiEditPage entity="Person" rendererProps={{
			sortable: {
				sortBy: 'order'
			}
		}}>
			<FieldText name="shortName" />
			<PageLinkById change={id => ({ name: 'edit_person', params: { id } })}>Edit this mofo</PageLinkById>
		</MultiEditPage>
		<CreatePage
			entity="Person"
			rendererProps={{
				title: 'Create a new team member'
			}}
		>
			{personForm}
		</CreatePage>
		<EditPage
			entity="Person"
			rendererProps={{
				title: (
					<>
						Edit <FieldText name="shortName" />
					</>
				)
			}}
		>
			{personForm}
		</EditPage>
	</Pages>
)
