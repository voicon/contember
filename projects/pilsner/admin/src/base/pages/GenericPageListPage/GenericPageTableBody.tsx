import { FieldText, RemoveButton, Table } from 'cms-admin'
import * as React from 'react'
import { EditButton } from '../../components'

export const genericPageTableBody = (
	<>
		<Table.Cell>
			<FieldText name="title" />
		</Table.Cell>
		<Table.Cell>
			<EditButton pageName="pageList" />
		</Table.Cell>
		<Table.Cell>
			<RemoveButton removeType={'delete'} immediatePersist={true} />
		</Table.Cell>
	</>
)
