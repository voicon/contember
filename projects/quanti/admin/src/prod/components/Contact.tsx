import * as React from 'react'
import { Component, TextField } from 'cms-admin'
import { LocaleSideDimension } from '../LocaleSideDimension'
import { Seo } from './Seo'
import { Link } from './Link'

export const Contact = Component(
	() => (
		<LocaleSideDimension>
			<TextField label="Header" name="header" />
			<Seo name="seo" />
			<Link name="link" />
		</LocaleSideDimension>
	),
	'Contact'
)
