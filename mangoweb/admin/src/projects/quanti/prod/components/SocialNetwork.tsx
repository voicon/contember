import * as React from 'react'
import { Component, FieldName, RadioField, Literal } from 'cms-admin'

interface SocialNetworkProps {
	name: FieldName
}

export const SocialNetwork = Component<SocialNetworkProps>(
	props => (
		<RadioField
			name={props.name}
			label="Social network"
			inline={true}
			options={[
				[new Literal('Facebook'), 'Facebook'],
				[new Literal('Twitter'), 'Twitter'],
				[new Literal('LinkedIn'), 'LinkedIn']
			]}
		/>
	),
	'SocialNetwork'
)
