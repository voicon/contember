import { RichTextField, TextField, Variable } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components/LocaleSideDimension'

const contactLocationForm = (
	<>
		<TextField name="email" label="E-mail" />
		<TextField name="phoneNumber" label="Phone number" />
		<LocaleSideDimension>
			<TextField
				name="$locale.title"
				label={
					<>
						<Variable name="flag" /> Title
					</>
				}
			/>
			<TextField
				name="$locale.entity"
				label={
					<>
						<Variable name="flag" /> Legal entity
					</>
				}
			/>
			<RichTextField
				name="$locale.address"
				label={
					<>
						<Variable name="flag" /> Address
					</>
				}
			/>
			<RichTextField
				name="$locale.additionalText"
				label={
					<>
						<Variable name="flag" /> Additional info
					</>
				}
			/>
		</LocaleSideDimension>
	</>
)

export default contactLocationForm
