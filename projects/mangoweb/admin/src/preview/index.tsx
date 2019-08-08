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
	<Pages project="mangoweb" stage="prod" layout={Layout}>
		<GenericPage pageName="dashboard">
			<H1>manGoweb admin</H1>
		</GenericPage>

		<EditPage
			entity="FrontPage"
			where={() => ({ unique: new GraphQlBuilder.Literal('one') })}
			rendererProps={{
				title: 'Front Page',
			}}
		>
			{frontPageForm}
		</EditPage>

		<MultiEditPage
			entity="MenuItem"
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
			entity="Footer"
			where={() => ({ unique: new GraphQlBuilder.Literal('one') })}
			rendererProps={{
				title: 'Footer',
			}}
		>
			{footerForm}
		</EditPage>

		{/* ---- */}

		<EditPage
			entity="TeamPage"
			where={() => ({ unique: new GraphQlBuilder.Literal('one') })}
			rendererProps={{
				title: 'Team Page',
			}}
		>
			{teamPageForm}
		</EditPage>
		<MultiEditPage
			entity="Person"
			rendererProps={{
				title: 'Team members',
				beforeContent: <PageLink change={() => ({ name: 'create_person' })}>Create new</PageLink>,
				sortable: {
					sortBy: 'order',
				},
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
				),
			}}
		>
			{personForm}
		</EditPage>
		<CreatePage
			entity="Person"
			rendererProps={{
				title: 'Create a new team member',
			}}
		>
			{personForm}
		</CreatePage>

		{/* ---- */}

		<EditPage
			entity="WhatWeDoPage"
			where={() => ({ unique: new GraphQlBuilder.Literal('one') })}
			rendererProps={{
				title: 'What we do page',
			}}
		>
			{whatWeDoPageForm}
		</EditPage>
		<EditPage
			entity="WhatWeDoPage"
			where={() => ({ unique: new GraphQlBuilder.Literal('one') })}
			pageName="multiEdit_whatWeDo"
			rendererProps={{
				title: 'What we do',
			}}
		>
			{whatWeDoListForm}
		</EditPage>
		<EditPage
			entity="WhatWeDo"
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
			entity="ReferencesPage"
			where={() => ({ unique: new GraphQlBuilder.Literal('one') })}
			rendererProps={{
				title: 'References page',
			}}
		>
			{referencesPageForm}
		</EditPage>

		<EditPage
			entity="ReferencesPage"
			where={() => ({ unique: new GraphQlBuilder.Literal('one') })}
			pageName="edit_references"
			rendererProps={{
				title: 'References',
			}}
		>
			{referencesForm}
		</EditPage>

		{/* ---- */}

		<EditPage
			entity="ContactPage"
			where={() => ({ unique: new GraphQlBuilder.Literal('one') })}
			rendererProps={{
				title: 'Contact page',
			}}
		>
			{contactPageForm}
		</EditPage>
		<EditPage
			entity="Contact"
			where={() => ({ unique: new GraphQlBuilder.Literal('one') })}
			rendererProps={{
				title: 'Contact information',
			}}
		>
			{contactForm}
		</EditPage>

		{/* ---- */}

		<MultiEditPage
			entity="Language"
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
