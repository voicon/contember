import * as React from 'react'
import { LinkWithAlert } from 'cms-admin'

export default class HeaderLeft extends React.Component {
	render() {
		const alert = <p>You are about to leave the form with potentially unsaved changes.</p>
		const cancelText = 'Cancel'

		return (
			<>

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
