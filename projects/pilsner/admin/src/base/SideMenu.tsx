import * as React from 'react'
import { DeployButton } from './components'
import { Menu } from 'cms-admin'

interface LayoutProps {
	deployButton: boolean
}

export class SideMenu extends React.Component<LayoutProps> {
	render() {
		return (
			<Menu>
				<Menu.Item>
					<Menu.Item title="Front page" to={{ pageName: 'frontPage' }} />
					<Menu.Item title="Stories">
						<Menu.Item title="Edit page" to={{ pageName: 'blogPage' }} />
						<Menu.Item title="All stories" to={{ pageName: 'blogList' }} />
						<Menu.Item title="Add a new story" to={{ pageName: 'blogCreate' }} />
					</Menu.Item>
					<Menu.Item title="Pubs">
						<Menu.Item title="Edit page" to={{ pageName: 'pubsPage' }} />
						<Menu.Item title="All pubs" to={{ pageName: 'pubList' }} />
						<Menu.Item title="Add a new pub" to={{ pageName: 'pubCreate' }} />
					</Menu.Item>
					<Menu.Item title="Tapsters">
						<Menu.Item title="Edit page" to={{ pageName: 'tapstersPage' }} />
						<Menu.Item title="All tapsters" to={{ pageName: 'tapsterList' }} />
						<Menu.Item title="Add a new tapster" to={{ pageName: 'tapsterCreate' }} />
					</Menu.Item>
					<Menu.Item title="Pages">
						<Menu.Item title="All pages" to={{ pageName: 'pageList' }} />
						<Menu.Item title="Add a new page" to={{ pageName: 'pageCreate' }} />
					</Menu.Item>
					<Menu.Item title="Pour" to={{ pageName: 'pour' }} />
				</Menu.Item>
				<Menu.Item title="Settings">
					<Menu.Item title="Footer" to={{ pageName: 'footer' }} />
					<Menu.Item title="Menu" to={{ pageName: 'menu' }} />
					<Menu.Item title="Categories" to={{ pageName: 'categories' }} />
					<Menu.Item title="Tags" to={{ pageName: 'tags' }} />
					<Menu.Item title="Locations" to={{ pageName: 'locations' }} />
					<Menu.Item title="Social networks" to={{ pageName: 'social' }} />
				</Menu.Item>
				<Menu.Item title="System">
					<Menu.Item title="Translations" to={{ pageName: 'translations' }} />
					<Menu.Item title="Sites" to={{ pageName: 'sites' }} />
				</Menu.Item>
				{this.props.deployButton && (
					<Menu.Item title="Deployment">
						<Menu.Item title={<DeployButton />} />
					</Menu.Item>
				)}
			</Menu>
		)
	}
}
