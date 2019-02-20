import { H1 } from '@blueprintjs/core'
import {
	Button,
	CreatePage,
	EditPage,
	FieldText,
	GenericPage,
	GraphQlBuilder,
	ListPage,
	Literal,
	MultiEditPage,
	PageLink,
	PageLinkById,
	Pages,
	RadioField,
	Repeater,
	SelectField,
	TextField
} from 'cms-admin'
import * as React from 'react'
import { Category } from './components/Category'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { FrontPage } from './components/FrontPage'
import { MenuItem } from './components/MenuItem'
import { Page } from './components/Page'
import { Person } from './components/Person'
import { Place } from './components/Place'
import { SocialNetwork } from './components/SocialNetwork'
import { Layout } from './Layout'
import { LocaleSideDimension } from './LocaleSideDimension'

export default () => (
	<Pages project="quanti" stage="prod" layout={Layout}>
		<GenericPage pageName="dashboard">
			<H1>Quanti admin</H1>
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

		<MultiEditPage
			entity="MenuItem"
			pageName="menuItems"
			rendererProps={{
				title: 'Menu',
				sortable: {
					sortBy: 'order'
				}
			}}
		>
			<MenuItem />
		</MultiEditPage>

		<MultiEditPage entity="Category" pageName="categories" rendererProps={{ title: 'Categories' }}>
			<Category />
		</MultiEditPage>
		<ListPage
			entity="Page"
			rendererProps={{
				title: 'Pages',
				beforeContent: (
					<PageLink
						change={() => ({ name: 'create_page' })}
						Component={props => (
							<Button {...props} Component="a">
								Create
							</Button>
						)}
					/>
				)
			}}
		>
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

		<MultiEditPage entity="Person" pageName="people" rendererProps={{ sortable: { sortBy: 'order' }, title: 'People' }}>
			<Person />
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
				<SelectField
					label="Link target"
					name="joinUs(locale.slug='$currentLocaleSlug').target"
					options="Linkable.url"
				/>
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
