import { GenericPage, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { ImageField, StandaloneEdit } from '../components'
import { LinkForm, SeoForm } from '../forms'

export const TapstersPage = (
	<GenericPage pageName={'tapstersPage'}>
		<div>
			<h1>Tapsters Page</h1>
			<StandaloneEdit entityName={'Site'} where="(slug = $site)">
				<ToOne field={'tapstersPage'}>
					<TextField name={'title'} large={true} />
					<LinkForm />
					<ImageField name={'headerImage'} label={'Header image'} />
					<SeoForm />
				</ToOne>
			</StandaloneEdit>
		</div>
	</GenericPage>
)
