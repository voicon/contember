import { Callout, H1, Intent, OL } from '@blueprintjs/core'
import { CreatePage, EditPage, FieldText, GenericPage, MultiEditPage, Pages } from 'cms-admin'
import * as React from 'react'

import { Layout } from './adminLayout'
import contactLocationForm from './forms/contactLocationForm'
import footerForm from './forms/footerForm'
import frontPageForm from './forms/frontPageForm'
import { menuItemForm } from './forms/menuItemForm'
import personForm from './forms/personForm'
import { personListForm } from './forms/personListForm'

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
			entity="MenuItem"
			rendererProps={{
				title: 'Menu',
				sortable: {
					sortBy: 'order'
				},
				beforeContent: <Callout icon="warning-sign" intent="warning" title="Behold!">
					<p>
						Due to CMS limitations, you cannot (yet) explicitly choose which link points to which page. As a
						workaround, the <strong>order</strong> of the items is interpreted as follows:
					</p>
					<OL>
						<li>Front page</li>
						<li>Team</li>
						<li>What we do</li>
						<li>References</li>
						<li>Contact</li>
					</OL>
					<p>Sorry about that.</p>
				</Callout>
			}}
		>
			{menuItemForm}
		</MultiEditPage>

		<EditPage
			entity="Footer"
			rendererProps={{
				title: 'Footer'
			}}
		>
			{footerForm}
		</EditPage>

		<MultiEditPage
			entity="ContactLocation"
			rendererProps={{
				title: 'Contact Locations'
			}}
		>
			{contactLocationForm}
		</MultiEditPage>

		<MultiEditPage
			entity="Person"
			rendererProps={{
				title: 'Team members',
				sortable: {
					sortBy: 'order'
				}
			}}
		>
			{personListForm}
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
