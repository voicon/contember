import {
	AccessorContext,
	Box,
	EntityAccessor,
	EntityCollectionAccessor,
	EntityCollectionWrapperProps,
	Menu,
} from 'cms-admin'
import * as React from 'react'

const getParentId = (entity: EntityAccessor): string | undefined =>
	(entity.data.getField('parent') as EntityAccessor).getPersistedKey() || undefined

const childAccessorFactory = (accessor: EntityCollectionAccessor) => (parent: string | undefined) =>
	accessor.entities.filter(
		(it): it is EntityAccessor => it instanceof EntityAccessor && getParentId(it) === parent,
	) as EntityAccessor[]

type ChildAccessor = (parent: string | undefined) => EntityAccessor[]

const renderTree = (childAccessor: ChildAccessor, parent: string | undefined, children: React.ReactNode) => {
	const entities = childAccessor(parent)
	if (entities.length === 0) {
		return null
	}
	return entities.map(it => (
		<AccessorContext.Provider value={it} key={it.getKey()}>
			<Menu.Item key={it.getKey()} title={children}>
				{renderTree(childAccessor, it.getPersistedKey() || undefined, children)}
			</Menu.Item>
		</AccessorContext.Provider>
	))
}

export const LocationTreeRenderer = React.memo((props: EntityCollectionWrapperProps) => (
	<Box>
		<Menu>
			<Menu.Item>{renderTree(childAccessorFactory(props.accessor), undefined, props.originalChildren)}</Menu.Item>
		</Menu>
	</Box>
))
LocationTreeRenderer.displayName = 'LocationTreeRenderer'
