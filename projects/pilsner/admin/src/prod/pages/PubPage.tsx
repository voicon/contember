import { FieldText, GenericPage, Literal, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { Grid, ImageField, StandaloneEdit } from '../components'
import { LinkForm, SeoForm } from '../forms'

export const PubPage = (
	<GenericPage pageName={'pubs'}>
		<div>
			<StandaloneEdit entityName={'Site'} where="(slug = $site)">
				<ToOne field={'pubsPage'}>
					<TextField name={'title'} large={true} />
					<LinkForm />
					<ImageField name={'headerImage'} label={'Header image'} />
					<SeoForm />
				</ToOne>
			</StandaloneEdit>
		</div>
		<h2>Pubs</h2>
		<Grid
			entityName="Pub"
			orderBy={[{ name: new Literal('asc') }]}
			filter="[site.slug = $site]"
			createButton={{
				pageName: 'pubCreate',
				label: 'Add pub',
			}}
			editButton={{
				pageName: 'pubEdit',
			}}
		>
			<FieldText name="name" />
			<FieldText name="subtitle" />
		</Grid>
	</GenericPage>
)
