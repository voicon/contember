import { Component, SortableRepeater, TextField, ToOne } from 'cms-admin'
import * as React from 'react'

interface AttributesFormProps {
	field: string
}

export const AttributesForm = Component<AttributesFormProps>(
	props => (
		<>
			<ToOne {...props}>
				<h2>Attributes</h2>
				<SortableRepeater sortBy={'order'} field={'attributes'}>
					<TextField name="title" label={'Title'} />
					<SortableRepeater sortBy={'order'} field={'values'}>
						<TextField name="value" label={'Value'} />
						<TextField name="url" label={'URL'} />
					</SortableRepeater>
				</SortableRepeater>
			</ToOne>
		</>
	),
	'AttributesForm'
)
