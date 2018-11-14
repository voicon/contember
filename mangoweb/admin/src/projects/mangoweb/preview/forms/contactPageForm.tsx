import { H2 } from '@blueprintjs/core'
import { TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components'

export const contactPageForm = (
	<>
		<H2>General</H2>
		<LocaleSideDimension>
			<TextField name="$locale.contactUsButtonLabel" label="'Contact us' button label" />
		</LocaleSideDimension>

		<H2>Contact form</H2>
		<LocaleSideDimension>
			<TextField name="$locale.userMessageLabel" label="Label of the 'message' field" />
			<TextField name="$locale.userPhoneLabel" label="Label of the 'user phone' field" />
			<TextField name="$locale.contactFormButtonText" label="Submit button text" />
			<TextField name="$locale.contactFormSuccessMessage" label="Success message" />
			<TextField name="$locale.contactFormErrorMessage" label="Failure message" />
		</LocaleSideDimension>
	</>
)
