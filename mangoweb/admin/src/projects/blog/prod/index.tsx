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
	TextField,
	ToMany,
	LineBreakBehavior,
	Block,
	Mark
} from 'cms-admin'
import * as React from 'react'

import { Layout } from './adminLayout'

export default () => (
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
			<RichTextField
				name="perex"
				label="Perex"
				lineBreakBehavior={LineBreakBehavior.DISABLE}
				blocks={[
					{
						block: Block.PARAGRAPH,
						marks: [Mark.BOLD]
					}
				]}
			/>
			<RichTextField
				name="content"
				label="Content"
				lineBreakBehavior={LineBreakBehavior.NEWBLOCK}
				blocks={[
					{
						block: Block.HEADING,
						marks: [Mark.UNDERLINED]
					},
					{
						block: Block.PARAGRAPH,
						marks: [Mark.BOLD, Mark.ITALIC, Mark.LINK, Mark.UNDERLINED]
					}
				]}
			/>
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
