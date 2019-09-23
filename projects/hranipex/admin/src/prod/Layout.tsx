import { DimensionsSwitcher, LayoutDefault, Literal } from 'cms-admin'
import * as React from 'react'
import logo from './logo.svg'
import { SideMenu } from './SideMenu'

interface LayoutProps {}

const siteSwitcher = (
	<DimensionsSwitcher
		optionEntities="Site"
		orderBy={[{ order: new Literal('asc') }]}
		dimension="site"
		maxItems={1}
		labelField="code"
		slugField="code"
	/>
)

const localeSwitcher = (
	<DimensionsSwitcher
		optionEntities="SiteLocale"
		filter="[site.code = $site]"
		orderBy={[{ order: new Literal('asc') }]}
		dimension="siteLocale"
		labelField="code"
		slugField="code"
	/>
)

export class Layout extends React.PureComponent<LayoutProps> {
	render() {
		return (
			<LayoutDefault
				header={{
					title: logo,
					left: (
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '3px 10px' }}>
								Site: {siteSwitcher}
							</div>
							<div style={{ border: '1px solid #ccc', marginLeft: '10px', borderRadius: '5px', padding: '3px 10px' }}>
								Locale: {localeSwitcher}
							</div>
						</div>
					),
					right: false,
				}}
				side={<SideMenu />}
				content={this.props.children}
			/>
		)
	}
}
