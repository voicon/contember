import { Pages } from 'cms-admin'
import * as React from 'react'
import { Layout } from '../base/Layout'
import * as pageList from '../base/pages'
import '../../../src/beta/_theme.sass'

class BetaLayout extends React.PureComponent {
	render() {
		return <Layout deployButton={false} children={this.props.children} />
	}
}

export default () => <Pages layout={BetaLayout} children={Object.values(pageList)} />
