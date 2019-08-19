import {
	EditPage,
	EntityListDataProvider,
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
	Mark,
} from 'cms-admin'
import * as React from 'react'

import { Layout } from './adminLayout'

export default () => (
	<Pages project="blog" stage="prod" layout={Layout}>
		<Page name="dashboard">{() => <p />}</Page>
		<EditPage entity="Page">
			<TextField name="title" label="Title" size="large" />
			<TextField name="urlSlug" label="URL" />
			<RichTextField
				name="perex"
				label="Perex"
				lineBreakBehavior={LineBreakBehavior.DISABLE}
				blocks={[
					{
						block: Block.PARAGRAPH,
						marks: [Mark.BOLD],
					},
				]}
			/>
			<RichTextField
				name="content"
				label="Content"
				lineBreakBehavior={LineBreakBehavior.NEWBLOCK}
				blocks={[
					{
						block: Block.HEADING,
						marks: [Mark.UNDERLINED],
					},
					{
						block: Block.PARAGRAPH,
						marks: [Mark.BOLD, Mark.ITALIC, Mark.LINK, Mark.UNDERLINED],
					},
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
				<SingleEntityDataProvider entityName="Post" where={{ id }}>
					<TextField name="publishedAt" label="Time" />
					<SelectField name="author" options="Author.name" label="Author" />

					<Repeater field="categories">
						<SideDimensions
							dimension="lang"
							variableName="currentLang"
							variables={{
								locale: env => `locales(locale=${env.getValue('currentLang')})`,
							}}
						>
							<TextField name="$locale.name" label="Name" />
						</SideDimensions>
					</Repeater>

					<SideDimensions
						dimension="lang"
						variableName="currentLang"
						variables={{
							locale: env => `locales(locale=${env.getValue('currentLang')})`,
						}}
					>
						<TextField name="$locale.title" label="Title" />
					</SideDimensions>
				</SingleEntityDataProvider>
			)}
		</Page>

		<Page<{ postList: {} }> name="postList">
			{() => (
				<>
					<h1>All posts</h1>
					<EntityListDataProvider entityName="Post">
						<ToMany field="locales[locale = cs]">
							<TextField name="title" label="Title" />
						</ToMany>
					</EntityListDataProvider>
				</>
			)}
		</Page>
	</Pages>
)
