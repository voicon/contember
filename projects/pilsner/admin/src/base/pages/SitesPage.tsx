import { MultiEditPage, TextField } from 'cms-admin'
import * as React from 'react'

export const SitesPage = (
	<MultiEditPage
		entityName="Site"
		pageName="sites"
		rendererProps={{
			title: 'Sites',
			sortable: {
				sortBy: 'order',
			},
		}}
	>
		<TextField label="Name" name="name" />
		<TextField label="Slug" name="slug" />
	</MultiEditPage>
)
