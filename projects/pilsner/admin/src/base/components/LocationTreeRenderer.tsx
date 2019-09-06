import {
	CollectionRenderer,
	CommonRendererProps,
	AccessorContext,
	DataRendererProps,
	DefaultRenderer,
	EntityAccessor,
	LayoutInner,
	Menu,
	Tile,
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
		<>
			{entities.map(it => (
				<AccessorContext.Provider value={it} key={it.getKey()}>
					<Menu.Item key={it.getKey()} title={children}>
						{renderTree(childAccessor, it.getPersistedKey() || null, children)}
					</Menu.Item>
				</AccessorContext.Provider>
			))}
		</>
	)
}

export class LocationTreeRenderer extends React.PureComponent<DataRendererProps & LocationTreeRendererProps> {
	public render() {
		return (
			<CollectionRenderer data={this.props.data}>
				{(rawData, entities) => (
					<LayoutInner>
						{DefaultRenderer.renderTitleBar(this.props)}
						{this.props.beforeContent}

						{entities.length > 0 && (
							<Tile>
								<Menu>
									<Menu.Item>{renderTree(childAccessorFactory(entities), null, this.props.children)}</Menu.Item>
								</Menu>
							</Tile>
						)}
						{!!entities.length || <div>There are no items to display.</div>}
					</LayoutInner>
				)}
			</CollectionRenderer>
		)
	}
}
