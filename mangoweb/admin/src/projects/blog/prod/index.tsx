import * as React from 'react'
import {
	Pages,
	Page,
	Entity,
	SingleEntityDataProvider,
	EntityListDataProvider,
	ToMany,
	ToOne,
	GraphQlBuilder,
	TextField,
	EditPage,
	PersistButton,
	SelectField,
	UnlinkButton,
	Repeater,
	TextareaField,
	RichTextField
} from 'cms-admin'

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
			<TextareaField name="perex" label="Perex" singleLine={true} />
			<RichTextField name="content" label="Content" allowLineBreaks={false} />
			<h2>Featured links</h2>
			<Repeater field="featuredLinks">
				<Entity name="FeaturedLink">
					<TextField name="title" label="Title" />
					<TextField name="url" label="URL" />
					<TextField name="color" label="Color" />
					<UnlinkButton />
					<hr />
				</Entity>
			</Repeater>
			<PersistButton />
		</EditPage>

		<Page<{ edit_post2: { id: string } }> name="edit_post2">
			{({ id }) => (
				<Layout>
					<SingleEntityDataProvider where={{ id }}>
						<Entity name="Post">
							<TextField name="publishedAt" label="Time" />
							<SelectField name="author" label="Author" entityName="Author" optionFieldName="name" />
							<ToMany field="categories">
								<Entity name="Category">
									<ToMany field="locales">
										<Entity name="CategoryLocale" where={{ locale: { eq: new GraphQlBuilder.Literal('cs') } }}>
											<TextField name="name" label="Name" />
										</Entity>
									</ToMany>
								</Entity>
							</ToMany>
							<ToMany field="locales">
								<Entity name="PostLocale">
									<TextField name="title" label="Title" />
								</Entity>
							</ToMany>
						</Entity>
					</SingleEntityDataProvider>
				</Layout>
			)}
		</Page>

		<Page<{ postList: {} }> name="postList">
			{() => (
				<Layout>
					<h1>All posts</h1>
					<EntityListDataProvider>
						<Entity name="Post">
							<ToMany field="locales">
								<Entity name="PostLocale" where={{ locale: { eq: new GraphQlBuilder.Literal('cs') } }}>
									<TextField name="title" label="Title" />
								</Entity>
							</ToMany>
						</Entity>
					</EntityListDataProvider>
				</Layout>
			)}
		</Page>
	</Pages>
)
