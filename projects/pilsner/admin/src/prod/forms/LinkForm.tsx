import { Component, TextField } from 'cms-admin'
import * as React from 'react'

export const LinkForm = Component(() => {
	return (
		<div className={'inputBox'}>
			<div className={'inputBox-header'}>URL</div>
			<div className={'inputBox-row'}>
				<TextField name="link.url" horizontal={true} />
			</div>
		</div>
	)
}, 'LinkForm')
