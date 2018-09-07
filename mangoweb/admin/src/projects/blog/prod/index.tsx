import * as React from 'react'
import {
	Pages,
	Page,
	Entity,
	DataProvider,
	OneToMany,
	OneToOne,
	GraphQlBuilder,
	TextField,
	EditPage,
	PersistButton,
	UnlinkButton,
	Repeater
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

		<EditPage entity="Post" layout={Layout}>
			<TextField name="publishedAt" />
			<OneToOne field="author">
				<Entity name="Author">
					<TextField name="name" />
				</Entity>
			</OneToOne>
		</EditPage>

		<Page<{ edit_post2: { id: string } }> name="edit_post2">
			{({ id }) => (
				<Layout>
					<DataProvider>
						<Entity name="Post" where={{ id }}>
							<TextField name="publishedAt" label="Time" />
							<OneToOne field="author">
								<Entity name="Author">
									<TextField name="name" label="Name" />
								</Entity>
							</OneToOne>
							<OneToOne field="author">
								<Entity name="Author">
									<TextField name="name" label="Name" />
									<UnlinkButton />
								</Entity>
							</OneToOne>
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
					</DataProvider>
				</Layout>
			)}
		</Page>
	</Pages>
)
