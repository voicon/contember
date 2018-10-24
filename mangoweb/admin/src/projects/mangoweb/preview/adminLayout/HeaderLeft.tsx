import { LinkWithAlert, PageLink } from 'cms-admin'
import * as React from 'react'

export default class HeaderLeft extends React.Component {
	render() {
		const alert = <p>You are about to leave the form with potentially unsaved changes.</p>
		const cancelText = 'Cancel'

		return (
			<>
				<PageLink change={() => ({ name: 'dashboard' })}>manGoweb</PageLink>
				{' Langs: '}
				<LinkWithAlert
					requestChange={r => ({ ...r, dimensions: { lang: ['cs'] } })}
					alert={alert}
					cancelButtonText={cancelText}
				>
					CS
				</LinkWithAlert>
				{' | '}
				<LinkWithAlert
					requestChange={r => ({ ...r, dimensions: { lang: ['en'] } })}
					alert={alert}
					cancelButtonText={cancelText}
				>
					EN
				</LinkWithAlert>
				{' | '}
				<LinkWithAlert
					requestChange={r => ({ ...r, dimensions: { lang: ['cs', 'en'] } })}
					alert={alert}
					cancelButtonText={cancelText}
				>
					CS+EN
				</LinkWithAlert>
			</>
		)
	}
}
