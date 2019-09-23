import * as React from 'react'

export const getCountryFlag = (code: string) => (
	<img src={'https://cz-hranipex.mgw.cz/assets/images/flags-country/' + code + '.svg'} style={{ height: '1em' }} />
)

export const getLocaleFlag = (code: string) => (
	<img src={'https://cz-hranipex.mgw.cz/assets/images/flags-locale/' + code + '.svg'} style={{ height: '1em' }} />
)
