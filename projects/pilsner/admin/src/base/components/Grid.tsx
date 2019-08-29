import {
	EntityListDataProvider,
	EntityListDataProviderProps,
	RemoveButton,
	Table,
	TableRenderer,
	TableRendererProps,
} from 'cms-admin'
import * as React from 'react'
import { EditButton, EditButtonProps } from './EditButton'

export interface GridProps extends Omit<EntityListDataProviderProps<TableRendererProps>, 'renderer'> {
	editButton?: EditButtonProps
	children: React.ReactNode
}

export const Grid = React.memo<GridProps>(({ editButton, ...props }) => (
	<EntityListDataProvider {...props} renderer={TableRenderer}>
		{React.Children.toArray(props.children).map((it, i) => (
			<Table.Cell key={i}>{it}</Table.Cell>
		))}

		{editButton && (
			<Table.Cell>
				<EditButton {...editButton} />
			</Table.Cell>
		)}
		<Table.Cell>
			<RemoveButton removeType={'delete'} immediatePersist={true} />
		</Table.Cell>
	</EntityListDataProvider>
))
