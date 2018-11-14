import { H2 } from '@blueprintjs/core'
import { NumberField, RichTextField, TextField } from 'cms-admin'
import * as React from 'react'
import { ImageField, LocaleSideDimension } from '../components'

export const personForm = (
	<>
		<H2>Basics</H2>
		<TextField name="shortName" label="Short name" />
		<TextField name="longName" label="Full name" />
		<LocaleSideDimension>
			<TextField name="$locale.position" label="Position" />
			<RichTextField name="$locale.bio" label="Short bio" />
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
	</>
)
