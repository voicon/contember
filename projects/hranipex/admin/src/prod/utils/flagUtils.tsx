import * as React from 'react'

export const getCountryFlag = (code: string) => (
	<img
		src={'https://s3.eu-central-1.amazonaws.com/hranipex.mgw.cz/assets/images/flags-country/' + code + '.svg'}
		style={{ height: '1em' }}
	/>
)

export const getLocaleFlag = (code: string) => (
	<img
		src={'https://s3.eu-central-1.amazonaws.com/hranipex.mgw.cz/assets/images/flags-locale/' + code + '.svg'}
		style={{ height: '1em' }}
	/>
)
