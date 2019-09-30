import { FieldText, RemoveButton, TableCell } from 'cms-admin'
import * as React from 'react'
import { EditButton } from '../../components'

export const genericPageTableBody = (
	<>
		<TableCell>
			<FieldText name="title" />
		</TableCell>
		<TableCell shrunk>
			<EditButton pageName="pageList" /> {/* TODO: link to actual page */}
		</TableCell>
		<TableCell shrunk>
			<RemoveButton removeType={'delete'} immediatePersist={true} />
		</TableCell>
	</>
)
