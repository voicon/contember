import { PageLinkButton, PageLinkButtonProps, Icon } from 'cms-admin'
import * as React from 'react'

export type NavigateBackButtonProps = PageLinkButtonProps

export const NavigateBackButton = React.memo<NavigateBackButtonProps>(props => (
	<PageLinkButton distinction="seamless" size="small" style={{ marginLeft: '-.3em' }} {...props}>
		<Icon blueprintIcon="chevron-left" />
		{props.children}
	</PageLinkButton>
))
