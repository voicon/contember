import { MultiEditPage, TextField } from 'cms-admin'
import * as React from 'react'

export const IconsPage = (
	<MultiEditPage
		entity="IconShape"
		pageName="icons"
		rendererProps={{
			title: 'Icons',
		}}
	>
		<TextField label="Identifier" name="identifier" />
	</MultiEditPage>
)
