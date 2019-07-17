import { FieldText, GenericPage, Literal, TextField } from 'cms-admin'
import * as React from 'react'
import { Grid, ImageField, StandaloneEdit } from '../components'
import { LinkForm, SeoForm } from '../forms'
import { getSite } from '../utils/environment'

export const TapsterPage = (
	<GenericPage pageName={'tapsters'}>
		<div>
			<StandaloneEdit entityName={'TapstersPage'} where={env => ({ site: { slug: getSite(env) } })}>
				<TextField name={'title'} large={true} />
				<LinkForm />
				<ImageField name={'headerImage'} label={'Header image'} />
				<SeoForm />
			</StandaloneEdit>
		</div>
		<h2>Tapsters</h2>
		<Grid
			entityName="Tapster"
			orderBy={[{ name: new Literal('asc') }]}
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
