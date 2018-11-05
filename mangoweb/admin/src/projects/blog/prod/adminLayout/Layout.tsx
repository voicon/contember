import * as React from 'react'
import { LayoutDefault } from 'cms-admin'
import Side from './Side'
import HeaderLeft from './HeaderLeft'

const layout = {
	header: {
		left: <HeaderLeft />,
		right: false
	},
	side: <Side />
}

export default class Layout extends React.Component {
	render() {
		return <LayoutDefault {...layout} content={this.props.children} />
	}
}
