import { Button, GenericPage, PageLink, Tile, TileList } from 'cms-admin'
import * as React from 'react'
import { CreateButton } from '../components'

export const DashboardPage = (
	<GenericPage pageName="dashboard">
		<h1>PilsnerUrquell admin</h1>
		<TileList>
			<Tile>
				<h1>Production</h1>
				<a href="https://www.pilsnerurquell.com/" target="_blank" rel="noopener">
					pilsnerurquell.com
				</a>
			</Tile>
			<Tile>
				<h1>Preview</h1>
				<a href="https://pilsner.mgw.cz/" target="_blank" rel="noopener">
					pilsner.mgw.cz
				</a>
			</Tile>
			<Tile>
				<img
					src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-eye-4.png"
					width={160}
					height={160}
					alt=""
					style={{ opacity: 0.8 }}
				/>
				<br />
				<br />
				<PageLink
					change={() => ({ name: 'frontPage' })}
					Component={buttonProps => (
						<Button {...buttonProps} Component="a">
							Edit Front page
						</Button>
					)}
				/>
			</Tile>
			<Tile>
				<img
					src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/240/iconmonstr-note-19.png"
					width={160}
					height={160}
					alt=""
					style={{ opacity: 0.8 }}
				/>
				<br />
				<br />
				<CreateButton pageName="blogCreate" label="Compose new blog post" />
			</Tile>
			<Tile>
				<img
					src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-home-7.png"
					width={160}
					height={160}
					alt=""
					style={{ opacity: 0.8 }}
				/>
				<br />
				<br />
				<CreateButton pageName="pubCreate" label="Add new pub" />
			</Tile>
			<Tile>
				<img
					src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-user-6.png"
					width={160}
					height={160}
					alt=""
					style={{ opacity: 0.8 }}
				/>
				<br />
				<br />
				<CreateButton pageName="tapsterCreate" label="Add new tapster" />
			</Tile>
		</TileList>
	</GenericPage>
)
