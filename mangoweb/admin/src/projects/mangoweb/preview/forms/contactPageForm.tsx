import { H2, H3 } from '@blueprintjs/core'
import { TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components'
import { seoForm } from './seoForm'

export const contactPageForm = (
	<>
		<H2>General</H2>
		<LocaleSideDimension>
			<TextField name="$locale.titleShort" label="Abbreviated page title" />
			<TextField name="$locale.titleFull" label="Full page title" />
			<TextField name="$locale.contactUsButtonLabel" label="'Contact us' button label" />
		</LocaleSideDimension>

		<H2>Contact form</H2>
		<LocaleSideDimension>
			<TextField name="$locale.userMessageLabel" label="Label of the 'message' field" />
			<TextField name="$locale.userContactLabel" label="Label of the 'user phone or mail' field" />
			<TextField name="$locale.submitButtonText" label="Submit button text" />
			<H3>User feedback messages</H3>
			<TextField name="$locale.formSuccessMessage" label="Success" />
			<TextField name="$locale.formErrorMessage" label="Generic failure" />
			<TextField name="$locale.unfilledMessageMessage" label="Unfilled user message" />
			<TextField name="$locale.unfilledContactMessage" label="Unfilled phone or mail" />
		</LocaleSideDimension>

		{seoForm}
	</>
)
