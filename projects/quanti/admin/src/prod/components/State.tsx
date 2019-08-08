import * as React from 'react'
import { Component, FieldName, Literal, SelectField } from 'cms-admin'

interface StateProps {
	name: FieldName
}

export const State = Component<StateProps>(
	props => (
		<>
			<SelectField
				name={props.name}
				label="State"
				//inline={true}
				options={[
					[new Literal('Draft'), 'Draft'],
					[new Literal('ToBePublished'), 'To be published'],
					[new Literal('Published'), 'Published'],
				]}
			/>
		</>
	),
	'State',
)
