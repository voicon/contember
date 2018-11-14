import { H2 } from '@blueprintjs/core'
import { Repeater, RichTextField, TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components/LocaleSideDimension'


export const contactForm = (
	<>
		<H2>Channels</H2>
		<TextField name="facebook" label="Facebook" />
		<TextField name="linkedIn" label="LinkedIn" />
		<TextField name="instagram" label="Instagram" />
		<TextField name="twitter" label="Twitter" />

		<H2>Contact locations</H2>
		<Repeater field="locations">
			<TextField name="email" label="E-mail" />
			<TextField name="phoneNumber" label="Phone number" />
			<LocaleSideDimension>
				<TextField name="$locale.title" label="Title" />
				<TextField name="$locale.entity" label="Legal entity" />
				<RichTextField name="$locale.address" label="Address" />
				<RichTextField name="$locale.additionalText" label="Additional info" />
			</LocaleSideDimension>
		</Repeater>
	</>
)
