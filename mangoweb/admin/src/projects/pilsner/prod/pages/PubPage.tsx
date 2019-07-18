import { FieldText, GenericPage, Literal, TextField } from 'cms-admin'
import * as React from 'react'
import { Grid, ImageField, StandaloneEdit } from '../components'
import { LinkForm, SeoForm } from '../forms'

export const PubPage = (
	<GenericPage pageName={'pubs'}>
		<div>
			<StandaloneEdit entityName={'PubsPage'} where="(site.slug = $site)">
				<TextField name={'title'} large={true} />
				<LinkForm />
				<ImageField name={'headerImage'} label={'Header image'} />
				<SeoForm />
			</StandaloneEdit>
		</div>
		<h2>Pubs</h2>
		<Grid
			entityName="Pub"
			orderBy={[{ name: new Literal('asc') }]}
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
