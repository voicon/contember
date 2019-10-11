import { EditPage, TextField, ToOne, Box } from 'cms-admin'
import * as React from 'react'
import { ImageField } from '../components'
import { FrontPageContentForm, LinkForm, SeoForm } from '../forms'

export const FrontPage = (
	<EditPage pageName={'frontPage'} entityName={'Site'} where="(slug = $site)" rendererProps={{ title: 'Front page' }}>
		<ToOne field={'frontPage'}>
			<Box>
				<TextField name={'title'} label={'Title'} size="large" allowNewlines={true} />
			</Box>
			<ImageField name={'headerImage'} label={'Header image'} />

			<FrontPageContentForm />
			<TextField name={'scrollString'} label={'Scroll string'} allowNewlines={true} />

			<LinkForm />
			<SeoForm />
		</ToOne>
	</EditPage>
)
