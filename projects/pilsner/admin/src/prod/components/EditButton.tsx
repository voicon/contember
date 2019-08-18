import { Button, PageLinkById } from 'cms-admin'
import * as React from 'react'

export interface EditButtonProps {
	pageName: string
	label?: string
}

export const EditButton: React.ComponentType<EditButtonProps> = props => (
	<PageLinkById
		change={id => ({ name: props.pageName, params: { id } })}
		Component={({ isActive, ...buttonProps }) => (
			<div style={{ marginLeft: '.75em', display: 'inline-block' }}>
				<Button {...buttonProps} Component="a">
					{props.label || 'Edit'}
				</Button>
			</div>
		)}
	/>
)
