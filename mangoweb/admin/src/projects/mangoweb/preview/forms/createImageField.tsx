import { FieldName, TextField } from 'cms-admin'
import * as React from 'react'

export const createImageField = (relation: FieldName, label: string) => (
	<TextField name={`${relation}.url`} label={label} />
)
