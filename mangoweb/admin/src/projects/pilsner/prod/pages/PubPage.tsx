import * as React from 'react'
import { FieldText, GenericPage, TextField } from 'cms-admin'
import { Grid, ImageField, StandaloneEdit } from '../components'
import { getSite } from '../utils/environment'
import { LinkForm, SeoForm } from '../forms'

export const PubPage = (
	<GenericPage pageName={'pubs'}>
		<div>
			<StandaloneEdit entityName={'PubsPage'} where={env => ({ site: { slug: getSite(env) } })}>
				<TextField name={'title'} large={true} />
				<LinkForm />
				<ImageField name={'headerImage'} label={'Header image'} />
				<SeoForm />
			</StandaloneEdit>
		</div>
		<h2>Pubs</h2>
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
