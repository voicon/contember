import { Box, Component, SortableRepeater, TextField, ToOne } from 'cms-admin'
import * as React from 'react'

interface AttributesFormProps {
	field: string
}

export const AttributesForm = Component<AttributesFormProps>(
	props => (
		<>
			<ToOne {...props}>
				<SortableRepeater sortBy={'order'} field={'attributes'} label="Attributes">
					<TextField name="title" label={'Title'} />
					<SortableRepeater sortBy={'order'} field={'values'} label="Values">
						<TextField name="value" label={'Value'} />
						<TextField name="url" label={'URL'} />
					</SortableRepeater>
				</SortableRepeater>
			</ToOne>
		</>
	),
	'AttributesForm',
)
