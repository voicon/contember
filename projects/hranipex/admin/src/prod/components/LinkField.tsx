import { Block, Component, DiscriminatedBlocks, FieldName, FormGroupProps, ToOne, TextField } from 'cms-admin'
import * as React from 'react'

export interface LinkFieldProps {
	name: FieldName
	label?: FormGroupProps['label']
}

export const LinkField = Component<LinkFieldProps>((props: LinkFieldProps) => {
	return (
		<ToOne field={props.name}>
			<DiscriminatedBlocks name="type" label={props.label}>
				<Block discriminateBy="external" label="External">
					<TextField name="url" label="URL" />
				</Block>
			</DiscriminatedBlocks>
		</ToOne>
	)
})
