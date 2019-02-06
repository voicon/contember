import * as React from 'react'
import { Component, TextField } from 'cms-admin'

interface LinkProps {
	name: string
}

export const Link = Component<LinkProps>(props => <TextField label="Url" name={`${props.name}.url`} />, 'Link')
