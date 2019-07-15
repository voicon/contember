import { Component, SelectField } from 'cms-admin'
import * as React from 'react'

export const SiteField = Component(
	() => <SelectField options="Site[slug=$site].name" name={'site'} label={'Site'} />,
	'SiteField'
)
