import {
	EditPage,
	EntityListDataProvider,
	Literal,
	Page,
	Pages,
	Repeater,
	RichTextField,
	SelectField,
	SideDimensions,
	SingleEntityDataProvider,
	TextAreaField,
	TextField,
	ToMany
} from 'cms-admin'
import * as React from 'react'

import { Layout } from './adminLayout'

export default (
	<Pages project="blog" stage="prod">
		<Page name="dashboard">
			{() => (
				<Layout>
					<p />
				</Layout>
			)}
		</Page>
		<EditPage entity="Page" layout={Layout}>
			<TextField name="title" label="Title" large={true} />
			<TextField name="urlSlug" label="URL" inlineLabel={true} />
			<TextAreaField name="perex" label="Perex" singleLine={true} />
			<RichTextField name="content" label="Content" allowLineBreaks={false} />
			<h2>Featured links</h2>
			<Repeater field="featuredLinks">
				<TextField name="title" label="Title" />
				<TextField name="url" label="URL" />
				<TextField name="color" label="Color" />
				<hr />
			</Repeater>
		</EditPage>

		<Page<{ edit_post2: { id: string } }> name="edit_post2">
			{({ id }) => (
				<Layout>
					<SingleEntityDataProvider name="Post" where={{ id }}>
						<TextField name="publishedAt" label="Time" />
						<SelectField name="author" label="Author" entityName="Author" optionFieldName="name" />

						<Repeater field="categories">
							<SideDimensions
								dimension="lang"
								variableName="currentLang"
								variables={{
									locale: env => `locales(locale=${env.getValue('currentLang')})`
								}}
							>
								<TextField name="$locale.name" label="Name" />
							</SideDimensions>
						</Repeater>

						<SideDimensions
							dimension="lang"
							variableName="currentLang"
							variables={{
								locale: env => `locales(locale=${env.getValue('currentLang')})`
							}}
						>
							<TextField name="$locale.title" label="Title" />
						</SideDimensions>
					</SingleEntityDataProvider>
				</Layout>
			)}
		</Page>

		<Page<{ postList: {} }> name="postList">
			{() => (
				<Layout>
					<h1>All posts</h1>
					<EntityListDataProvider name="Post">
						<ToMany field="locales" filter={{ locale: { eq: new Literal('cs') } }}>
							<TextField name="title" label="Title" />
						</ToMany>
					</EntityListDataProvider>
				</Layout>
			)}
		</Page>
	</Pages>
)
