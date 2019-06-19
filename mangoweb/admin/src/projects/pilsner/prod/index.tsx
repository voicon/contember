import { H1 } from '@blueprintjs/core'
import { GenericPage, Pages } from 'cms-admin'
import * as React from 'react'
import { Layout } from './Layout'
import Sites from './pages/Sites'

export default () => (
	<Pages project="pilsner" stage="prod" layout={Layout}>
		<GenericPage pageName="dashboard">
			<H1>PilsnerUrquell.com admin</H1>
		</GenericPage>

		{Sites}
	</Pages>
)
