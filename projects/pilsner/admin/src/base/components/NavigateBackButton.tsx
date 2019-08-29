import { PageLinkButton, PageLinkButtonProps } from 'cms-admin'
import * as React from 'react'

export type NavigateBackButtonProps = PageLinkButtonProps

export const NavigateBackButton = React.memo<NavigateBackButtonProps>(props => (
	<PageLinkButton distinction="seamless" size="small" style={{ marginLeft: '-.3em' }} {...props}>
		<span
			style={{ fontSize: '.7em', display: 'inline-block', top: '-.09em', position: 'relative', marginRight: '.25em' }}
		>
			❰
		</span>
		{props.children}
	</PageLinkButton>
))
