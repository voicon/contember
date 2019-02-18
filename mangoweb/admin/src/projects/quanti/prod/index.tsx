import { Callout, H1, Intent } from '@blueprintjs/core'
import {
	CreatePage,
	EditPage,
	FieldText,
	GenericPage,
	GraphQlBuilder,
	HiddenField,
	ListPage,
	Literal,
	MultiEditPage,
	PageLinkById,
	Pages,
	RadioField,
	Repeater,
	TextField,
	SelectField
} from 'cms-admin'
import * as React from 'react'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { FrontPage } from './components/FrontPage'
import { MenuItem } from './components/MenuItem'
import { Page } from './components/Page'
import { Place } from './components/Place'
import { SocialNetwork } from './components/SocialNetwork'
import { Layout } from './Layout'
import { LocaleSideDimension } from './LocaleSideDimension'

export default () => (
	<Pages project="quanti" stage="prod" layout={Layout}>
		<GenericPage pageName="dashboard">
			<H1>Quanti admin</H1>
			<Callout intent={Intent.WARNING} title="Warning">
				<p>Don't forget to choose a language first!</p>
			</Callout>
		</GenericPage>

		<MultiEditPage entity="Locale" pageName="locales" rendererProps={{ title: 'Locale' }}>
			<TextField label="Slug" name="slug" />
			<TextField label="Label of switching link" name="switchToLabel" />
		</MultiEditPage>

		<EditPage
			entity="FrontPage"
			where={() => ({ unique: new GraphQlBuilder.Literal('One') })}
			rendererProps={{ title: 'Front page' }}
		>
			<FrontPage />
		</EditPage>

		<MultiEditPage entity="MenuItem" pageName="menuItems" rendererProps={{ title: 'Menu' }}>
			<MenuItem />
		</MultiEditPage>

		<ListPage entity="Page" rendererProps={{ title: 'Pages' }}>
			<LocaleSideDimension>
				<FieldText name="$locale.header" />
			</LocaleSideDimension>
			<PageLinkById change={id => ({ name: 'edit_page', params: { id } })}>Edit</PageLinkById>
		</ListPage>

		<CreatePage entity="Page" rendererProps={{ title: 'Create page' }}>
			<Page />
		</CreatePage>

		<EditPage entity="Page" rendererProps={{ title: 'Edit page' }}>
			<Page />
		</EditPage>

		<MultiEditPage entity="Place" pageName="places" rendererProps={{ sortable: { sortBy: 'order' }, title: 'Places' }}>
			<Place />
		</MultiEditPage>

		<MultiEditPage entity="Social" pageName="social" rendererProps={{ title: 'Social' }}>
			<SocialNetwork name="network" />
			<TextField label="Url" name="url" />
		</MultiEditPage>

		<EditPage
			entity="Footer"
			pageName="footer"
			where={() => ({ unique: new GraphQlBuilder.Literal('One') })}
			rendererProps={{ title: 'Footer' }}
		>
			<Footer />
		</EditPage>

		<EditPage
			entity="Contact"
			pageName="contact"
			where={() => ({ unique: new GraphQlBuilder.Literal('One') })}
			rendererProps={{ title: 'Contact' }}
		>
			<Contact />
		</EditPage>

		<EditPage
			entity="JoinUsRoot"
			pageName="joinUs"
			where={() => ({ unique: new GraphQlBuilder.Literal('One') })}
			rendererProps={{ title: 'Join us' }}
		>
			<LocaleSideDimension>
				<TextField label="Label" name="joinUs(locale.slug='$currentLocaleSlug').label" />
			</LocaleSideDimension>
		</EditPage>

		<EditPage
			entity="TranslationRoot"
			pageName="translations"
			where={() => ({ unique: new GraphQlBuilder.Literal('One') })}
			rendererProps={{ title: 'Translations' }}
		>
			<Repeater field="translated">
				<SelectField name="locale" label="Locale" options="Locale.slug" />
				<RadioField
					name="translatable"
					label="String"
					inline={true}
					options={[
						[new Literal('emailContent'), 'emailContent'],
						[new Literal('emailContact'), 'emailContact'],
						[new Literal('emailSend'), 'emailSend']
					]}
				/>
				<TextField label="Translated" name="translated" />
			</Repeater>
		</EditPage>
	</Pages>
)
