import { H2 } from '@blueprintjs/core'
import { Repeater, TextAreaField, TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components'

export const contactForm = (
	<>
		<H2>Channels</H2>
		<TextField name="facebook" label="Facebook" />
		<TextField name="linkedIn" label="LinkedIn" />
		<TextField name="instagram" label="Instagram" />
		<TextField name="twitter" label="Twitter" />
		<TextField name="mainEmail" label="E-mail" />

		<H2>Contact locations</H2>
		<Repeater field="locations">
			<TextField name="email" label="E-mail" />
			<TextField name="phoneNumber" label="Phone number" />
			<LocaleSideDimension>
				<TextField name="title" label="Title" />
				<TextField name="entity" label="Legal entity" />
				<TextAreaField name="address" label="Address" />
				<TextAreaField name="description" label="Location description" />
				<TextAreaField name="additionalInfo" label="Additional info" />
			</LocaleSideDimension>
		</Repeater>
	</>
)
