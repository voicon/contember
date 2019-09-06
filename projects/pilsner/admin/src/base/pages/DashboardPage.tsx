import {
	Button,
	GenericPage,
	PageLink,
	PageLinkButton,
	Tile,
	TileList,
	TitleBar,
	IncreaseHeadingDepth,
} from 'cms-admin'
import * as React from 'react'

export const DashboardPage = (
	<GenericPage pageName="dashboard">
		<TitleBar>PilsnerUrquell admin</TitleBar>
		<IncreaseHeadingDepth currentDepth={1}>
			<div style={{ marginBottom: '1.5rem' }}>
				<TileList>
					<Tile heading="Production">
						<a href="https://www.pilsnerurquell.com/" target="_blank" rel="noopener">
							pilsnerurquell.com
						</a>
					</Tile>
					<Tile heading="Live preview">
						<a href="https://live.pilsnerurquell.com/" target="_blank" rel="noopener">
							live.pilsnerurquell.com
						</a>
					</Tile>
					<Tile heading="Beta">
						<a href="https://beta.pilsner.mgw.cz/" target="_blank" rel="noopener">
							beta.pilsner.mgw.cz
						</a>
					</Tile>
				</TileList>
			</div>
			<TileList>
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
						to="frontPage"
						Component={({ isActive, ...buttonProps }) => (
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
					<PageLinkButton to="blogCreate">Compose a new blog post</PageLinkButton>
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
					<PageLinkButton to="pubCreate">Add a new pub</PageLinkButton>
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
					<PageLinkButton to="tapsterCreate">Add a new tapster</PageLinkButton>
				</Tile>
			</TileList>
		</IncreaseHeadingDepth>
	</GenericPage>
)
