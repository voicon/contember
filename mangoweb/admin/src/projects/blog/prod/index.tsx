import * as React from 'react'
import {
	Pages,
	Page,
	PageLink,
	Entity,
	DataProvider,
	OneToMany,
	OneToOne,
	GraphQlBuilder,
	TextField,
	EditPage,
	PersistButton,
	UnlinkButton,
	Repeater,
	LogoutLink
} from 'cms-admin'

interface LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
	<div>
		<div>
			<ul>
				<li>
					<PageLink change={() => ({ name: 'dashboard', params: {} })}>Dashboard</PageLink>
				</li>
				<li>
					<PageLink change={() => ({ name: 'edit_post', params: { id: 'a3e98b8c-29b6-42da-a7e7-38828ac34c4c' } })}>
						Post
					</PageLink>
				</li>
				<li>
					<PageLink change={() => ({ name: 'edit_post2', params: { id: '8784918b-6615-4e12-9fe1-aac0f73a11b2' } })}>
						Post2
					</PageLink>
				</li>
				<li>
					<LogoutLink>Logout</LogoutLink>
				</li>
			</ul>
		</div>
		<div>{children}</div>
	</div>
)

export default (
	<Pages project="blog" stage="prod">
		<Page name="dashboard">
			{() => (
				<Layout>
					<h1>dashboard</h1>
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
