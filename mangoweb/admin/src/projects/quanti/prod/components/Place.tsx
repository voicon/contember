import * as React from 'react'
import { Component, CheckboxField, FloatField, TextField, TextAreaField } from 'cms-admin'
import { State } from './State'
import { LocaleSideDimension } from '../LocaleSideDimension'

export const Place = Component(
	() => (
		<>
			<State name="state" />
			<CheckboxField label="Is bigger on front page" name="isBiggerOnFrontPage" inlineLabel />
			<FloatField label="Latitude" name="gpsLat" />
			<FloatField label="Longitude" name="gpsLng" />
			<LocaleSideDimension>
				<TextField label="Name" name="$locale.name" />
				<TextAreaField label="Address" name="$locale.address" />
				<TextField label="IČO/DIČ line" name="$locale.subAddress" />
				<TextField label="Telefon" name="$locale.phone" />
				<TextField label="E-mail" name="$locale.email" />
			</LocaleSideDimension>
		</>
	),
	'Place'
)
