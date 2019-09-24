import { FieldText, RemoveButton, Table2Cell } from 'cms-admin'
import * as React from 'react'
import { EditButton } from '../../components'

export const genericPageTableBody = (
	<>
		<Table2Cell>
			<FieldText name="title" />
		</Table2Cell>
		<Table2Cell shrink>
			<EditButton pageName="pageList" />
		</Table2Cell>
		<Table2Cell shrink>
			<RemoveButton removeType={'delete'} immediatePersist={true} />
		</Table2Cell>
	</>
)
