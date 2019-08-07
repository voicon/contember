import {
	EntityListDataProvider,
	EntityListDataProviderProps,
	RemoveButton,
	Table,
	TableRenderer,
	TableRendererProps
} from 'cms-admin'
import * as React from 'react'
import { CreateButton, CreateButtonProps } from './CreateButton'
import { EditButton, EditButtonProps } from './EditButton'

export interface GridProps extends Omit<EntityListDataProviderProps<TableRendererProps>, 'renderer' | 'rendererProps'> {
	createButton?: CreateButtonProps
	editButton?: EditButtonProps
	children: React.ReactNode
}

export const Grid: React.ComponentType<GridProps> = props => (
	<EntityListDataProvider
		{...props}
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
