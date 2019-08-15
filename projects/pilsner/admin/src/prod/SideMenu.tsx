import * as React from 'react'
import { DeployButton } from './components'
import { Menu } from 'cms-admin'

export class SideMenu extends React.Component {
	render() {
		return (
			<Menu>
				<Menu.Item>
					<Menu.Item title="Front page" target={{ pageName: 'frontPage' }}></Menu.Item>
					<Menu.Item title="Stories" active>
						<Menu.Item title="Edit page" target={{ pageName: 'blogPage' }}></Menu.Item>
						<Menu.Item title="All stories" target={{ pageName: 'blogList' }}></Menu.Item>
						<Menu.Item title="Add new story" target={{ pageName: 'blogCreate' }}></Menu.Item>
					</Menu.Item>
					<Menu.Item title="Pubs">
						<Menu.Item title="Edit page" target={{ pageName: 'pubsPage' }}></Menu.Item>
						<Menu.Item title="All pubs" target={{ pageName: 'pubList' }}></Menu.Item>
						<Menu.Item title="Add new pub" target={{ pageName: 'pubCreate' }}></Menu.Item>
					</Menu.Item>
					<Menu.Item title="Tapsters">
						<Menu.Item title="Edit page" target={{ pageName: 'tapstersPage' }}></Menu.Item>
						<Menu.Item title="All tapsters" target={{ pageName: 'tapsterList' }}></Menu.Item>
						<Menu.Item title="Add new tapster" target={{ pageName: 'tapsterCreate' }}></Menu.Item>
					</Menu.Item>
					<Menu.Item title="Pages">
						<Menu.Item title="All pages" target={{ pageName: 'pageList' }}></Menu.Item>
						<Menu.Item title="Add new page" target={{ pageName: 'pageCreate' }}></Menu.Item>
					</Menu.Item>
					<Menu.Item title="Pour" target={{ pageName: 'pour' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="Settings">
					<Menu.Item title="Footer" target={{ pageName: 'footer' }}></Menu.Item>
					<Menu.Item title="Menu" target={{ pageName: 'menu' }}></Menu.Item>
					<Menu.Item title="Categories" target={{ pageName: 'categories' }}></Menu.Item>
					<Menu.Item title="Tags" target={{ pageName: 'tags' }}></Menu.Item>
					<Menu.Item title="Locations" target={{ pageName: 'locations' }}></Menu.Item>
					<Menu.Item title="Social networks" target={{ pageName: 'social' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="System">
					<Menu.Item title="Translations" target={{ pageName: 'translations' }}></Menu.Item>
					<Menu.Item title="Sites" target={{ pageName: 'sites' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="Deployment">
					<Menu.Item title={<DeployButton />}></Menu.Item>
				</Menu.Item>
			</Menu>
		)
	}
}
