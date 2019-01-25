import { Callout, H1, Intent } from '@blueprintjs/core'
import { CreatePage, EditPage, FieldText, GenericPage, MultiEditPage, PageLink, Pages } from 'cms-admin'
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
	whatWeDoListForm,
	whatWeDoPageForm
} from './forms'
import { footerForm } from './forms/'
import { referencesForm } from './forms/referencesForm'
import { referencesPageForm } from './forms/referencesPageForm'

export default () => (
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
				}
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

		<GenericPage pageName="edit_teamPage">Nothing to see here as of yet</GenericPage>
		<MultiEditPage
			entity="Person"
			rendererProps={{
				title: 'Team members',
				beforeContent: <PageLink change={() => ({ name: 'create_person' })}>Create new</PageLink>,
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
				beforeContent: <PageLink change={() => ({ name: 'create_whatWeDo' })}>Create new</PageLink>,
				enableAddingNew: false,
				sortable: {
					sortBy: 'order'
				}
			}}
		>
			{whatWeDoListForm}
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
		<CreatePage
			entity="WhatWeDo"
			rendererProps={{
				title: 'Create a new "What we do" activity'
			}}
		>
			{whatWeDoForm}
		</CreatePage>

		{/* ---- */}

		<EditPage
			entity="ReferencesPage"
			rendererProps={{
				title: 'References page'
			}}
		>
			{referencesPageForm}
		</EditPage>

		<EditPage
			entity="ReferencesPage"
			pageName="edit_references"
			rendererProps={{
				title: 'References'
			}}
		>
			{referencesForm}
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
