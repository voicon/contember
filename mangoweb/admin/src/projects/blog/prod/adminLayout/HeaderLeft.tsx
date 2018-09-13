import * as React from 'react'
import { Link } from 'cms-admin'

export default class Content extends React.Component {
	render() {
		return (
			<>
				<a href="#">This is Hranipex</a>
				{' Langs: '}
				<Link requestChange={r => ({ ...r, dimensions: { lang: ['cs'] } })}>CS</Link>
				{' | '}
				<Link requestChange={r => ({ ...r, dimensions: { lang: ['en'] } })}>EN</Link>
				{' | '}
				<Link requestChange={r => ({ ...r, dimensions: { lang: ['cs', 'en'] } })}>CS+EN</Link>
			</>
		)
	}
}
