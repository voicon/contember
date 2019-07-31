import {
	CollectionRenderer,
	CommonRendererProps,
	DataContext,
	DataRendererProps,
	DefaultRenderer,
	EntityAccessor
} from 'cms-admin'
import * as React from 'react'

export interface LocationTreeRendererProps extends CommonRendererProps {}

const getParentId = (entity: EntityAccessor): string | null =>
	(entity.data.getField('parent') as EntityAccessor).getPersistedKey() || null

const childAccessorFactory = (entities: EntityAccessor[]) => (parent: string | null) =>
	entities.filter(it => getParentId(it) === parent)

type ChildAccessor = (parent: string | null) => EntityAccessor[]

const renderTree = (childAccessor: ChildAccessor, parent: string | null, children: React.ReactNode) => {
	const entities = childAccessor(parent)
	if (entities.length === 0) {
		return null
	}
	return (
		<ul className={'tree-list'}>
			{entities.map(it => (
				<DataContext.Provider value={it} key={it.getKey()}>
					<li key={it.getKey()} className={'tree-item'}>
						{children}
						{renderTree(childAccessor, it.getPersistedKey() || null, children)}
					</li>
				</DataContext.Provider>
			))}
		</ul>
	)
}

export class LocationTreeRenderer extends React.PureComponent<DataRendererProps & LocationTreeRendererProps> {
	public render() {
		return (
			<CollectionRenderer data={this.props.data}>
				{(rawData, entities) => (
					<>
						{DefaultRenderer.renderTitle(this.props.title)}
						{this.props.beforeContent}

						{entities.length > 0 && (
							<div className={'tree'}>{renderTree(childAccessorFactory(entities), null, this.props.children)}</div>
						)}
						{!!entities.length || <div>There are no items to display.</div>}
					</>
				)}
			</CollectionRenderer>
		)
	}
}
