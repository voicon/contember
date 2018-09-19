import * as React from 'react'
import {
	Pages,
	Page,
	Entity,
	SingleEntityDataProvider,
	EntityListDataProvider,
	OneToMany,
	OneToOne,
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
			<OneToMany field="featuredLinks">
				<Entity name="FeaturedLink">
					<TextField name="title" label="Title" />
					<TextField name="url" label="URL" />
					<TextField name="color" label="Color" />
					<hr />
				</Entity>
			</OneToMany>
			<PersistButton />
		</EditPage>

		<Page<{ edit_post2: { id: string } }> name="edit_post2">
			{({ id }) => (
				<Layout>
					<SingleEntityDataProvider where={{ id }}>
						<Entity name="Post">
							<TextField name="publishedAt" label="Time" />
							<SelectField name="author" entityName="Author" optionFieldName="name" />
							<Repeater field="categories">
								<Entity name="Category">
									<OneToMany field="locales">
										<Entity name="CategoryLocale" where={{ locale: { eq: new GraphQlBuilder.Literal('cs') } }}>
											<TextField name="name" label="Name" />
											<UnlinkButton />
										</Entity>
									</OneToMany>
									<UnlinkButton />
								</Entity>
							</Repeater>
							<Repeater field="locales">
								<Entity name="PostLocale">
									<TextField name="title" label="Title" />
									<UnlinkButton />
								</Entity>
							</Repeater>
							<PersistButton />
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
							<OneToMany field="locales">
								<Entity name="PostLocale" where={{ locale: { eq: new GraphQlBuilder.Literal('cs') } }}>
									<TextField name="title" label="Title" />
								</Entity>
							</OneToMany>
						</Entity>
					</EntityListDataProvider>
				</Layout>
			)}
		</Page>
	</Pages>
)
