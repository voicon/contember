import * as React from 'react'
import { FieldText, GenericPage, TextField } from 'cms-admin'
import { Grid, ImageField, StandaloneEdit } from '../components'
import { getSite } from '../utils/environment'
import { LinkForm, SeoForm } from '../forms'

export const TapsterPage = (
	<GenericPage pageName={'tapsters'}>
		<h1>Tapsters</h1>
		<div>
			<StandaloneEdit entityName={'TapstersPage'} where={env => ({ site: { slug: getSite(env) } })}>
				<ImageField name={'headerImage'} label={'Header image'} />
				<TextField name={'title'} label={'Title'} />
				<LinkForm/>
				<SeoForm/>
			</StandaloneEdit>
		</div>
		<Grid
			entityName={'Tapster'}
			createButton={{
				pageName: 'tapsterCreate',
				label: 'Add tapster'
			}}
			editButton={{
				pageName: 'tapsterEdit'
			}}
		>
			<FieldText name="name" />
			<FieldText name="subtitle" />
		</Grid>
	</GenericPage>
)
