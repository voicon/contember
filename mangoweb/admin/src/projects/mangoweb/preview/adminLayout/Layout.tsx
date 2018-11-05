import * as React from 'react'
import { LayoutDefault } from 'cms-admin'
import HeaderLeft from './HeaderLeft'
import Side from './Side'

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
