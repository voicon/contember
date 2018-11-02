import { FieldName, TextField } from 'cms-admin'
import * as React from 'react'

const createVideoField = (relation: FieldName, label: string) => (
	<TextField name={`${relation}.vimeoId`} label={label} />
)

export default createVideoField
