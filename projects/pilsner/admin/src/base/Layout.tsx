import { DimensionsSwitcher, LayoutDefault, Literal } from 'cms-admin'
import * as React from 'react'
import logo from './logo.svg'
import { SideMenu } from './SideMenu'

interface LayoutProps {
	deployButton: boolean
}

export class Layout extends React.PureComponent<LayoutProps> {
	render() {
		return (
			<LayoutDefault
				{...{
					header: {
						title: logo,
						left: (
							<DimensionsSwitcher
								optionEntities="Site"
								orderBy={[{ order: new Literal('asc') }]}
								dimension="site"
								maxItems={1}
								labelField="name"
								slugField="slug"
							/>
						),
						right: false,
					},
					side: <SideMenu {...this.props} />,
				}}
				content={this.props.children}
			/>
		)
	}
}
