import { FieldText, RemoveButton, TableCell } from 'cms-admin'
import * as React from 'react'
import { EditButton } from '../../components'

export const genericPageTableBody = (
	<>
		<TableCell>
			<FieldText name="title" />
		</TableCell>
		<TableCell shrink>
			<EditButton pageName="pageList" />
		</TableCell>
		<TableCell shrink>
			<RemoveButton removeType={'delete'} immediatePersist={true} />
		</TableCell>
	</>
)
