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
				[new Literal('Facebook'), 'Facebook'],
				[new Literal('Twitter'), 'Twitter'],
				[new Literal('LinkedIn'), 'LinkedIn'],
				[new Literal('Instagram'), 'Instagram'],
			]}
		/>
	),
	'SocialNetwork',
)
