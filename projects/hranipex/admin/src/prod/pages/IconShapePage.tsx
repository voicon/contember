import { MultiEditPage, TextField } from 'cms-admin'
import * as React from 'react'

export const IconsPage = (
	<MultiEditPage
		entityName="IconShape"
		pageName="icons"
		rendererProps={{
			title: 'Icons',
		}}
	>
		<TextField label="Identifier" name="identifier" labelPosition="labelInlineLeft" />
	</MultiEditPage>
)
