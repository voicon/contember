import { EditPage, Literal, MultiEditPage, Repeater, SelectField, SortableRepeater, TextField } from 'cms-admin'
import * as React from 'react'

export const SocialLinkPage = (
	<EditPage pageName={'social'} entity={'Site'} where="(slug = $site)">
		<Repeater field={'socialLinks'}>
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
		</Repeater>
	</EditPage>
)
