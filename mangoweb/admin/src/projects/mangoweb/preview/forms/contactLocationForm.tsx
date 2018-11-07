import { RichTextField, TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components/LocaleSideDimension'

const contactLocationForm = (
	<>
		<TextField name="email" label="E-mail" />
		<TextField name="phoneNumber" label="Phone number" />
		<LocaleSideDimension>
			<TextField
				name="$locale.title"
				label="Title"
			/>
			<TextField
				name="$locale.entity"
				label="Legal entity"
			/>
			<RichTextField
				name="$locale.address"
				label="Address"
			/>
			<RichTextField
				name="$locale.additionalText"
				label="Additional info"
			/>
		</LocaleSideDimension>
	</>
)

export default contactLocationForm
