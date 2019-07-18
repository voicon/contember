import { MultiEditPage, TextField } from 'cms-admin'
import * as React from 'react'

export const SitesPage = (
	<MultiEditPage entity="Site" pageName="sites" rendererProps={{ title: 'Sites' }}>
		<TextField label="Name" name="name" />
	</MultiEditPage>
)
