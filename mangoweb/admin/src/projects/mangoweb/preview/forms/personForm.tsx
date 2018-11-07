import { H2 } from '@blueprintjs/core'
import { NumberField, RichTextField, TextField, Variable } from 'cms-admin'
import * as React from 'react'
import { ImageField } from '../components/ImageField'
import { LocaleSideDimension } from '../components/LocaleSideDimension'

const personForm = (
	<>
		<H2>Basics</H2>
		<TextField name="shortName" label="Short name" />
		<TextField name="longName" label="Full name" />
		<LocaleSideDimension>
			<TextField
				name="$locale.position"
				label={
					<>
						<Variable name="flag" /> Position
					</>
				}
			/>
			<RichTextField
				name="$locale.bio"
				label={
					<>
						<Variable name="flag" /> Short bio
					</>
				}
			/>
		</LocaleSideDimension>

		<H2>Photos</H2>
		<ImageField name="imageBig" label="Large image" />
		<ImageField name="imageSquare" label="Mug shot" />
		<NumberField name="faceOffset" label="Face offset" />

		<H2>Contact</H2>
		<TextField name="phoneNumber" label="Phone number" />
		<TextField name="email" label="E-mail" />

		<H2>Social</H2>
		<TextField name="facebook" label="Facebook" />
		<TextField name="twitter" label="Twitter" />
		<TextField name="likendin" label="LinkedIn" />
		<TextField name="github" label="GitHub" />
		<TextField name="instagram" label="Instagram" />

		<H2>Miscellaneous</H2>
		<NumberField name="order" label="Order" />
	</>
)

export default personForm
