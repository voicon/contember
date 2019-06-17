import * as React from 'react'
import { MultiEditPage, TextField } from 'cms-admin'

export default (
	<MultiEditPage entity="Site" pageName="sites" rendererProps={{ title: 'Sites' }}>
		<TextField label="Name" name="name" />
	</MultiEditPage>
)
