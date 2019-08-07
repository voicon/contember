import * as React from 'react'
import { Component, Repeater, CheckboxField, TextField } from 'cms-admin'

interface LinksProps {
	name: string
}

export const Links = Component<LinksProps>(
	props => (
		<Repeater field={props.name} removeType="delete">
			<TextField label="Url" name="url" />
			<CheckboxField label="Is primary" name="isPrimary" />
		</Repeater>
	),
	'Links'
)
