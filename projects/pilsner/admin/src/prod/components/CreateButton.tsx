import { Button, PageLink } from 'cms-admin'
import * as React from 'react'

export interface CreateButtonProps {
	pageName: string
	label?: string
}

export const CreateButton: React.ComponentType<CreateButtonProps> = props => (
	<PageLink
		change={() => ({ name: props.pageName })}
		Component={({ isActive, ...buttonProps }) => (
			<Button {...buttonProps} Component="a">
				{props.label || 'Create'}
			</Button>
		)}
	/>
)
