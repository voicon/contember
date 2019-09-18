import { EditPage, Literal, Repeater, SelectField, TextField } from 'cms-admin'
import * as React from 'react'

export const SocialLinkPage = (
	<EditPage
		pageName={'social'}
		entity={'Site'}
		where="(slug = $site)"
		rendererProps={{
			title: 'Social Networks',
		}}
	>
		<Repeater field={'socialLinks'} removeType={'delete'}>
			<SelectField
				name={'network'}
				label="Social network"
				//inline={true}
				options={[
					{ value: new Literal('facebook'), label: 'Facebook' },
					{ value: new Literal('twitter'), label: 'Twitter' },
					{ value: new Literal('youtube'), label: 'YouTube' },
					{ value: new Literal('instagram'), label: 'Instagram' },
				]}
			/>
			<TextField label="Url" name="url" />
		</Repeater>
	</EditPage>
)
