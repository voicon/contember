import * as React from 'react'

export const getCountryFlagUri = (code: string) =>
	`https://s3.eu-central-1.amazonaws.com/hranipex.mgw.cz/assets/images/flags-country/${code}.svg`

export const getCountryFlag = (code: string) => <img src={getCountryFlagUri(code)} style={{ height: '1em' }} />

export const getLocaleFlagUri = (code: string) =>
	`https://s3.eu-central-1.amazonaws.com/hranipex.mgw.cz/assets/images/flags-locale/${code}.svg`

export const getLocaleFlag = (code: string) => <img src={getLocaleFlagUri(code)} style={{ height: '1em' }} />
