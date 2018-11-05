import { FieldName, TextField } from 'cms-admin'
import * as React from 'react'

export const createVideoField = (relation: FieldName, label: string) => (
	<TextField name={`${relation}.vimeoId`} label={label} />
)
