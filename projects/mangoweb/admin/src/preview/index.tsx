import { Callout, H1, Intent } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import { CreatePage, EditPage, FieldText, GenericPage, GraphQlBuilder, MultiEditPage, PageLink, Pages } from 'cms-admin'
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
	whatWeDoPageForm,
} from './forms'
import { footerForm } from './forms/'
import { languageForm } from './forms/languageForm'
import { referencesForm } from './forms/referencesForm'
import { referencesPageForm } from './forms/referencesPageForm'
import { teamPageForm } from './forms/teamPageForm'

export default () => (
	<Pages layout={Layout}>
		<GenericPage pageName="dashboard">
			<H1>manGoweb admin</H1>
		</GenericPage>

		<EditPage
			entityName="FrontPage"
			where="(unique = one)"
			rendererProps={{
				title: 'Front Page',
			}}
		>
			{frontPageForm}
		</EditPage>

		<MultiEditPage
			entityName="MenuItem"
			rendererProps={{
				title: 'Menu',
				sortable: {
					sortBy: 'order',
				},
			}}
		>
			{menuItemForm}
		</MultiEditPage>

		<EditPage
			entityName="Footer"
			where="(unique = one)"
			rendererProps={{
				title: 'Footer',
			}}
		>
			{footerForm}
		</EditPage>

		{/* ---- */}

		<EditPage
			entityName="TeamPage"
			where="(unique = one)"
			rendererProps={{
				title: 'Team Page',
			}}
		>
			{teamPageForm}
		</EditPage>
		<MultiEditPage
			entityName="Person"
			rendererProps={{
				title: 'Team members',
				beforeContent: <PageLink to="create_person">Create new</PageLink>,
				sortable: {
					sortBy: 'order',
				},
			}}
		>
			{personListForm}
		</MultiEditPage>
		<EditPage
			entityName="Person"
			where="(id = $id)"
			rendererProps={{
				title: (
					<>
						Edit <FieldText name="shortName" />
					</>
				),
			}}
		>
			{personForm}
		</EditPage>
		<CreatePage
			entityName="Person"
			rendererProps={{
				title: 'Create a new team member',
			}}
		>
			{personForm}
		</CreatePage>

		{/* ---- */}

		<EditPage
			entityName="WhatWeDoPage"
			where="(unique = one)"
			rendererProps={{
				title: 'What we do page',
			}}
		>
			{whatWeDoPageForm}
		</EditPage>
		<EditPage
			entityName="WhatWeDoPage"
			where="(unique = one)"
			pageName="multiEdit_whatWeDo"
			rendererProps={{
				title: 'What we do',
			}}
		>
			{whatWeDoListForm}
		</EditPage>
		<EditPage
			entityName="WhatWeDo"
			where="(id = $id)"
			rendererProps={{
				title: (
					<>
						Edit <FieldText name="activity" />
					</>
				),
			}}
		>
			{whatWeDoForm}
		</EditPage>

		{/* ---- */}

		<EditPage
			entityName="ReferencesPage"
			where="(unique = one)"
			rendererProps={{
				title: 'References page',
			}}
		>
			{referencesPageForm}
		</EditPage>

		<EditPage
			entityName="ReferencesPage"
			where="(unique = one)"
			pageName="edit_references"
			rendererProps={{
				title: 'References',
			}}
		>
			{referencesForm}
		</EditPage>

		{/* ---- */}

		<EditPage
			entityName="ContactPage"
			where="(unique = one)"
			rendererProps={{
				title: 'Contact page',
			}}
		>
			{contactPageForm}
		</EditPage>
		<EditPage
			entityName="Contact"
			where="(unique = one)"
			rendererProps={{
				title: 'Contact information',
			}}
		>
			{contactForm}
		</EditPage>

		{/* ---- */}

		<MultiEditPage
			entityName="Language"
			rendererProps={{
				title: 'Languages',
				beforeContent: (
					<>
						<Callout intent={Intent.PRIMARY} icon={IconNames.INFO_SIGN} title="Information">
							<p>
								After you modify this form, you might need to refresh the page in order to update the dimension
								switcher.
							</p>
							<p>
								Also, really do think twice before you add a new language since at this stage, getting rid of it might
								prove impossible… 🙃
							</p>
						</Callout>
					</>
				),
			}}
		>
			{languageForm}
		</MultiEditPage>
	</Pages>
)
