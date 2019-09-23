import {
	EntityListDataProvider,
	EntityListDataProviderProps,
	RemoveButton,
	TableRenderer,
	TableRendererProps,
	Table2Cell,
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
			<Table2Cell key={i} shrink={i === 2}>
				{it}
			</Table2Cell>
		))}

		{editButton && (
			<Table2Cell shrink>
				<EditButton {...editButton} />
			</Table2Cell>
		)}
		<Table2Cell shrink>
			<RemoveButton removeType={'delete'} immediatePersist={true} />
		</Table2Cell>
	</EntityListDataProvider>
))
