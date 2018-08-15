import * as React from 'react'
import { Pages, Page, PageLink, Entity, DataProvider, OneToMany, OneToOne, GraphQlBuilder, TextField } from 'cms-admin'

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
					<PageLink change={() => ({ name: 'edit_post', params: { id: '14474645-d439-446c-bac3-e104a9b72a86' } })}>Post</PageLink>
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
		<Page<{ edit_post: { id: string } }> name="edit_post">
			{({ id }) => (
				<Layout>
					<DataProvider>
						{persist => {
							return (
								<Entity name="Post" where={{ id }}>
									<TextField name="publishedAt" />
									<OneToOne field="author">
										<Entity name="Author">
											<TextField name="name" />
										</Entity>
									</OneToOne>
									<OneToOne field="author">
										{unlink => {
											return (
												<Entity name="Author">
													<TextField name="name" />
													<button type="button" onClick={unlink}>
														×
													</button>
												</Entity>
											)
										}}
									</OneToOne>
									<OneToMany field="categories">
										{unlink => {
											return (
												<Entity name="Category">
													<OneToMany field="locales">
														{unlink => {
															return (
																<Entity
																	name="CategoryLocale"
																	where={{ locale: { eq: new GraphQlBuilder.Literal('cs') } }}
																>
																	<TextField name="name" />
																	<button type="button" onClick={unlink}>
																		×
																	</button>
																</Entity>
															)
														}}
													</OneToMany>
													<button type="button" onClick={unlink}>
														×
													</button>
												</Entity>
											)
										}}
									</OneToMany>
									<OneToMany field="locales">
										{unlink => {
											return (
												<Entity name="PostLocale">
													<TextField name="title" />
													<button type="button" onClick={unlink}>
														×
													</button>
												</Entity>
											)
										}}
									</OneToMany>
									<button type="button" onClick={persist}>
										Save!
									</button>
								</Entity>
							)
						}}
					</DataProvider>
				</Layout>
			)}
		</Page>
	</Pages>
)
