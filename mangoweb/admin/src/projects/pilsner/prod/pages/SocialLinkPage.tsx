import { Literal, MultiEditPage, SelectField, TextField } from 'cms-admin'
import * as React from 'react'

export const SocialLinkPage = (
	<MultiEditPage entity="SocialLink" pageName="social" rendererProps={{ title: 'Social networks' }}>
		<SelectField
			name={'network'}
			label="Social network"
			//inline={true}
			options={[
				[new Literal('facebook'), 'Facebook'],
				[new Literal('twitter'), 'Twitter'],
				[new Literal('youtube'), 'YouTube'],
				[new Literal('instagram'), 'Instagram']
			]}
		/>
		<TextField label="Url" name="url" />
	</MultiEditPage>
)
