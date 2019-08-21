import { Pages } from 'cms-admin'
import * as React from 'react'
import { Layout } from '../base/Layout'
import * as pageList from '../base/pages'
import '../../../src/base/_theme.sass'
import '../../../src/prod/_theme.sass'

class ProdLayout extends React.PureComponent {
	render() {
		return <Layout deployButton={true} children={this.props.children} />
	}
}

export default () => <Pages layout={ProdLayout} children={Object.values(pageList)} />
