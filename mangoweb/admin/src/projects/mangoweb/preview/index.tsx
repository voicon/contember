import * as React from 'react'
import {
	Pages,
	Page,
	Entity,
	EntityCreator,
	SingleEntityDataProvider,
	EntityListDataProvider,
	ToMany,
	ToOne,
	GraphQlBuilder,
	TextField,
	EditPage,
	GenericPage,
	ListPage,
	CreatePage,
	SelectField,
	Repeater,
	TextareaField,
	RichTextField,
	PageLinkById, FieldText
} from 'cms-admin'

import { Layout } from './adminLayout'
import { Callout, H1, Intent } from '@blueprintjs/core'
import personForm from './forms/personForm'

export default (
	<Pages project="mangoweb" stage="prod" layout={Layout}>
		<GenericPage pageName="dashboard">
			<H1>manGoweb admin</H1>
			<Callout intent={Intent.WARNING} title="Warning" icon="warning-sign">
				<p>Don't forget to choose a language first!</p>
			</Callout>
		</GenericPage>
		<ListPage entity="Person">
			<FieldText name="shortName" />
			<PageLinkById change={id => ({ name: 'edit_person', params: { id } })}>Edit this mofo</PageLinkById>
		</ListPage>
		<CreatePage entity="Person">
			<H1>Create new team member</H1>
			{personForm}
		</CreatePage>
		<EditPage entity="Person">
			<H1>Edit <FieldText name="shortName" /></H1>
			{personForm}
		</EditPage>
	</Pages>
)
