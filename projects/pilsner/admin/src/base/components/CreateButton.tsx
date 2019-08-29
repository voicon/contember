import { PageLinkButton } from 'cms-admin'
import * as React from 'react'

export interface CreateButtonProps {
	pageName: string
	label?: string
}

export const CreateButton: React.ComponentType<CreateButtonProps> = props => (
	<PageLinkButton to={props.pageName}>{props.label || 'Create'}</PageLinkButton>
)
