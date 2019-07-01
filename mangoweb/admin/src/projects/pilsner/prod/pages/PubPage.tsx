import * as React from 'react'
import { FieldText, GenericPage, TextField } from 'cms-admin'
import { Grid, ImageField, StandaloneEdit } from '../components'
import { getSite } from '../utils/environment'
import { LinkForm, SeoForm } from '../forms'

export const PubPage = (
	<GenericPage pageName={'pubs'}>
		<h1>Pubs</h1>
		<div>
			<StandaloneEdit entityName={'PubsPage'} where={env => ({ site: { slug: getSite(env) } })}>
				<ImageField name={'headerImage'} label={'Header image'} />
				<TextField name={'title'} label={'Title'} />
				<LinkForm/>
				<SeoForm/>

			</StandaloneEdit>
		</div>
		<Grid
			entityName={'Pub'}
			createButton={{
				pageName: 'pubCreate',
				label: 'Add pub'
			}}
			editButton={{
				pageName: 'pubEdit'
			}}
		>
			<FieldText name="name" />
			<FieldText name="subtitle" />
		</Grid>
	</GenericPage>
)
