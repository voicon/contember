import * as React from 'react'
import { Button, PageLink } from 'cms-admin'

export interface CreateButtonProps {
	pageName: string
	label?: string
}

export const CreateButton: React.ComponentType<CreateButtonProps> = props => (
	<PageLink
		change={() => ({ name: props.pageName })}
		Component={buttonProps => (
			<Button {...buttonProps} Component="a">
				{props.label || 'Create'}
			</Button>
		)}
	/>
)
