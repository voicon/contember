import { TextField } from 'cms-admin'
import * as React from 'react'

export const languageForm = (
	<>
		<TextField name="slug" label="Slug" />
		<TextField name="name" label="Name" />
		<TextField name="switchToThis" label="Switch to this language" />
	</>
)
