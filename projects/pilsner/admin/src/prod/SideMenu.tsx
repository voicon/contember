import * as React from 'react'
import { DeployButton } from './components'
import { Menu } from 'cms-admin'

export class SideMenu extends React.Component {
	render() {
		return (
			<Menu>
				<Menu.Item>
					<Menu.Item title="Front page" change={{ name: 'frontPage' }}></Menu.Item>
					<Menu.Item title="Stories" active>
						<Menu.Item title="Edit page" change={{ name: 'blogPage' }}></Menu.Item>
						<Menu.Item title="All stories" change={{ name: 'blogList' }}></Menu.Item>
						<Menu.Item title="Add new story" change={{ name: 'blogCreate' }}></Menu.Item>
					</Menu.Item>
					<Menu.Item title="Pubs">
						<Menu.Item title="Edit page" change={{ name: 'pubsPage' }}></Menu.Item>
						<Menu.Item title="All pubs" change={{ name: 'pubList' }}></Menu.Item>
						<Menu.Item title="Add new pub" change={{ name: 'pubCreate' }}></Menu.Item>
					</Menu.Item>
					<Menu.Item title="Tapsters">
						<Menu.Item title="Edit page" change={{ name: 'tapstersPage' }}></Menu.Item>
						<Menu.Item title="All pubs" change={{ name: 'tapsterList' }}></Menu.Item>
						<Menu.Item title="Add new pub" change={{ name: 'tapsterCreate' }}></Menu.Item>
					</Menu.Item>
					<Menu.Item title="Pages" change={{ name: 'pages' }}>
						<Menu.Item title="All pages" change={{ name: 'pageList' }}></Menu.Item>
						<Menu.Item title="Add new pub" change={{ name: 'pageCreate' }}></Menu.Item>
					</Menu.Item>
					<Menu.Item title="Pour" change={{ name: 'pour' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="Settings">
					<Menu.Item title="Footer" change={{ name: 'footer' }}></Menu.Item>
					<Menu.Item title="Menu" change={{ name: 'menu' }}></Menu.Item>
					<Menu.Item title="Categories" change={{ name: 'categories' }}></Menu.Item>
					<Menu.Item title="Tags" change={{ name: 'tags' }}></Menu.Item>
					<Menu.Item title="Locations" change={{ name: 'locations' }}></Menu.Item>
					<Menu.Item title="Social networks" change={{ name: 'social' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="System">
					<Menu.Item title="Translations" change={{ name: 'translations' }}></Menu.Item>
					<Menu.Item title="Sites" change={{ name: 'sites' }}></Menu.Item>
				</Menu.Item>
				<Menu.Item title="Deployment">
					<Menu.Item title={<DeployButton />}></Menu.Item>
				</Menu.Item>
			</Menu>
		)
	}
}
