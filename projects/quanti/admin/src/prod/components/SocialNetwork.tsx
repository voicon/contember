import * as React from 'react'
import { Component, FieldName, SelectField, Literal } from 'cms-admin'

interface SocialNetworkProps {
	name: FieldName
}

export const SocialNetwork = Component<SocialNetworkProps>(
	props => (
		<SelectField
			name={props.name}
			label="Social network"
			//inline={true}
			options={[
				{ value: new Literal('Facebook'), label: 'Facebook' },
				{ value: new Literal('Twitter'), label: 'Twitter' },
				{ value: new Literal('LinkedIn'), label: 'LinkedIn' },
				{ value: new Literal('Instagram'), label: 'Instagram' },
			]}
		/>
	),
	'SocialNetwork',
)
