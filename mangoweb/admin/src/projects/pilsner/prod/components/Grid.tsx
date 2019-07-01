import { CreateButton, CreateButtonProps } from './CreateButton'
import { EditButton, EditButtonProps } from './EditButton'
import * as React from 'react'
import { EntityListDataProvider, RemoveButton, Table, TableRenderer } from 'cms-admin'

export interface GridProps {
	entityName: string
	createButton?: CreateButtonProps
	editButton?: EditButtonProps
	children: React.ReactNode
}

export const Grid: React.ComponentType<GridProps> = props => (
	<EntityListDataProvider
		name={props.entityName}
		renderer={TableRenderer}
		rendererProps={{
			beforeContent: props.createButton && <CreateButton {...props.createButton} />
		}}
	>
		{React.Children.toArray(props.children).map((it, i) => (
			<Table.Cell key={i}>{it}</Table.Cell>
		))}

		<Table.Cell>
			{props.editButton && <EditButton {...props.editButton} />}
			<RemoveButton removeType={'delete'} immediatePersist={true} />
		</Table.Cell>
	</EntityListDataProvider>
)
