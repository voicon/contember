import * as React from 'react'
import { Button, PageLinkById } from 'cms-admin'

export interface EditButtonProps {
	pageName: string
	label?: string
}

export const EditButton: React.ComponentType<EditButtonProps> = props => (
	<PageLinkById
		change={id => ({ name: props.pageName, params: { id } })}
		Component={buttonProps => (
			<Button {...buttonProps} Component="a">
				{props.label || 'Edit'}
			</Button>
		)}
	/>
)
