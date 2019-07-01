import * as React from 'react'
import { FieldText, GenericPage } from 'cms-admin'
import { Grid } from '../components'

export const CategoryPage = (
	<GenericPage pageName={'categories'}>
		<h1>Categories</h1>
		<Grid
			entityName={'Category'}
			createButton={{
				pageName: 'categoryCreate',
				label: 'Create category'
			}}
			editButton={{
				pageName: 'categoryEdit'
			}}
		>
			<FieldText name="name" />
		</Grid>
	</GenericPage>
)
