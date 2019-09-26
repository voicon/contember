import {
	EntityListDataProvider,
	EntityListDataProviderProps,
	RemoveButton,
	TableRenderer,
	TableRendererProps,
	TableCell,
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
			<TableCell key={i} shrunk={i === 2}>
				{it}
			</TableCell>
		))}

		{editButton && (
			<TableCell shrunk>
				<EditButton {...editButton} />
			</TableCell>
		)}
		<TableCell shrunk>
			<RemoveButton removeType={'delete'} immediatePersist={true} />
		</TableCell>
	</EntityListDataProvider>
))
