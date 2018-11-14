import { Callout, H1, Intent, OL } from '@blueprintjs/core'
import { CreatePage, EditPage, FieldText, GenericPage, MultiEditPage, PageLink, Pages } from 'cms-admin'
import { GraphQlBuilder } from 'cms-client'
import * as React from 'react'
import { Layout } from './adminLayout'
import {
	contactForm,
	contactPageForm,
	frontPageForm,
	menuItemForm,
	personForm,
	personListForm,
	whatWeDoForm,
	whatWeDoOrderForm,
	whatWeDoPageForm
} from './forms'
import { footerForm } from './forms/'

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
				beforeContent: (
					<Callout icon="warning-sign" intent="warning" title="Behold!">
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
				)
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

		{/* ---- */}

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
		<CreatePage
			entity="Person"
			rendererProps={{
				title: 'Create a new team member'
			}}
		>
			{personForm}
		</CreatePage>

		{/* ---- */}

		<EditPage
			entity="WhatWeDoPage"
			rendererProps={{
				title: 'What we do page'
			}}
		>
			{whatWeDoPageForm}
		</EditPage>
		<MultiEditPage
			entity="WhatWeDo"
			rendererProps={{
				title: 'What we do',
				beforeContent: (
					<Callout intent="none" icon="info-sign" title="Info">
						<p>From here, you can sort the items as they appear on the what we do page.</p>
						<p>
							To edit the front page order, or add new items{' '}
							<PageLink
								change={() => ({ name: 'edit_frontPage', params: { unique: new GraphQlBuilder.Literal('one') } })}
							>
								edit the front page
							</PageLink>
							.
						</p>
					</Callout>
				),
				enableAddingNew: false,
				sortable: {
					sortBy: 'whatWeDoPageOrder'
				}
			}}
		>
			{whatWeDoOrderForm}
		</MultiEditPage>
		<EditPage
			entity="WhatWeDo"
			rendererProps={{
				title: (
					<>
						Edit <FieldText name="activity" />
					</>
				)
			}}
		>
			{whatWeDoForm}
		</EditPage>

		{/* ---- */}

		<EditPage
			entity="ReferencesPage"
			rendererProps={{
				title: 'References page'
			}}
		>
			todo references
		</EditPage>

		{/* ---- */}

		<EditPage
			entity="ContactPage"
			rendererProps={{
				title: 'Contact page'
			}}
		>
			{contactPageForm}
		</EditPage>
		<EditPage
			entity="Contact"
			rendererProps={{
				title: 'Contact information'
			}}
		>
			{contactForm}
		</EditPage>
	</Pages>
)
