import { H2, H3 } from '@blueprintjs/core'
import { TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components'
import { seoForm } from './seoForm'

export const contactPageForm = (
	<>
		<H2>General</H2>
		<LocaleSideDimension>
			<TextField name="titleShort" label="Abbreviated page title" />
			<TextField name="titleFull" label="Full page title" />
			<TextField name="contactUsButtonLabel" label="'Contact us' button label" />
		</LocaleSideDimension>

		<H2>Contact form</H2>
		<LocaleSideDimension>
			<TextField name="userMessageLabel" label="Label of the 'message' field" />
			<TextField name="userContactLabel" label="Label of the 'user phone or mail' field" />
			<TextField name="submitButtonText" label="Submit button text" />
			<H3>User feedback messages</H3>
			<TextField name="formSuccessMessage" label="Success" />
			<TextField name="formErrorMessage" label="Generic failure" />
			<TextField name="unfilledMessageMessage" label="Unfilled user message" />
			<TextField name="unfilledContactMessage" label="Unfilled phone or mail" />
		</LocaleSideDimension>

		{seoForm}
	</>
)
