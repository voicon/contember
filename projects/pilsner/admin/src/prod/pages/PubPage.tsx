import { FieldText, GenericPage, Literal, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { Grid, ImageField, StandaloneEdit } from '../components'
import { LinkForm, SeoForm } from '../forms'

export const PubPage = (
	<GenericPage pageName={'pubs'}>
		<div>
			<h1>Pubs Page</h1>
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
			orderBy={[{ publishedAt: new Literal('desc') }]}
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
			<div style={{ color: '#444', fontSize: '11px' }}>
				<FieldText
					name="publishedAt"
					format={(val: string | null) => {
						return val ? 'Published on ' + new Date(val).toLocaleDateString() : 'Not published'
					}}
				/>
			</div>
		</Grid>
	</GenericPage>
)
