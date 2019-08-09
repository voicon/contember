import { FieldText, GenericPage, Literal, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { Grid, ImageField, StandaloneEdit } from '../components'
import { LinkForm, SeoForm } from '../forms'

export const TapsterPage = (
	<GenericPage pageName={'tapsters'}>
		<div>
			<StandaloneEdit entityName={'Site'} where="(slug = $site)">
				<ToOne field={'tapstersPage'}>
					<TextField name={'title'} large={true} />
					<LinkForm />
					<ImageField name={'headerImage'} label={'Header image'} />
					<SeoForm />
				</ToOne>
			</StandaloneEdit>
		</div>
		<h2>Tapsters</h2>
		<Grid
			entityName="Tapster"
			orderBy={[{ publishedAt: new Literal('desc') }]}
			filter="[site.slug = $site]"
			createButton={{
				pageName: 'tapsterCreate',
				label: 'Add tapster',
			}}
			editButton={{
				pageName: 'tapsterEdit',
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
