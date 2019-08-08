import * as React from 'react'
import { Component, CheckboxField, FloatField, TextField, TextAreaField } from 'cms-admin'
import { State } from './State'
import { LocaleSideDimension } from '../LocaleSideDimension'

export const Place = Component(
	() => (
		<>
			<State name="state" />
			<CheckboxField label="Is bigger on front page" name="isBiggerOnFrontPage" />
			<FloatField label="Latitude" name="gpsLat" />
			<FloatField label="Longitude" name="gpsLng" />
			<LocaleSideDimension>
				<TextField label="Name" name="name" />
				<TextAreaField label="Address" name="address" />
				<TextField label="IČO/DIČ line" name="subAddress" />
				<TextField label="Telefon" name="phone" />
				<TextField label="E-mail" name="email" />
			</LocaleSideDimension>
		</>
	),
	'Place',
)
