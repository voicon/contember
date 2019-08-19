import { GenericPage, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { ImageField, StandaloneEdit } from '../components'
import { LinkForm, SeoForm } from '../forms'

export const PubsPage = (
	<GenericPage pageName={'pubsPage'}>
		<div>
			<h1>Pubs Page</h1>
			<StandaloneEdit entityName={'Site'} where="(slug = $site)">
				<ToOne field={'pubsPage'}>
					<TextField name={'title'} size="large" label="Title" allowNewlines={true} />
					<LinkForm />
					<ImageField name={'headerImage'} label={'Header image'} />
					<SeoForm />
				</ToOne>
			</StandaloneEdit>
		</div>
	</GenericPage>
)
