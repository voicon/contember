import * as React from 'react'
import { Component, FieldName, Literal, SelectField } from 'cms-admin'

interface StateProps {
	name: FieldName
}

export const State = Component<StateProps>(
	props => (
		<SelectField
			name={props.name}
			label="State"
			options={[
				{ value: new Literal('Draft'), label: 'Draft' },
				{ value: new Literal('ToBePublished'), label: 'To be published' },
				{ value: new Literal('Published'), label: 'Published' },
			]}
		/>
	),
	'State',
)
