import {
	ButtonList,
	Component,
	EntityAccessor,
	EntityCollectionAccessor,
	Field,
	PageLinkButton,
	RelativeSingleEntity,
	RemoveButton,
	Table,
	ToMany,
	ToOne,
	useEntityCollectionAccessor,
	useEntityContext,
	useProjectUserRoles,
} from 'cms-admin'
import * as React from 'react'
import { UserRoles } from '../../acl'
import { genericPageTableBody } from './GenericPageTableBody'

const customPages: Array<{
	field: RelativeSingleEntity
	title: React.ReactNode
	editPageName: string
}> = [
	{
		field: 'hopsPage',
		title: 'Hops page',
		editPageName: 'hops',
	},
	{
		field: 'pourPage',
		title: 'Pour page',
		editPageName: 'pour',
	},
]

export const GenericPageList = Component(
	() => {
		const userRoles = useProjectUserRoles()
		const genericPages = useEntityCollectionAccessor('genericPages')
		const siteEntity = useEntityContext()

		const isAdmin = userRoles.has(UserRoles.Admin)
		const isRegionManager = userRoles.has(UserRoles.RegionManager)

		const shouldDisplayCustomPages =
			isAdmin ||
			(isRegionManager &&
				customPages.reduce(
					(accumulator, customPage) => {
						const currentEntity = siteEntity.data.getField(customPage.field)
						return accumulator || (currentEntity instanceof EntityAccessor && currentEntity.isPersisted())
					},
					false as boolean,
				))

		const shouldDisplayGenericPages =
			genericPages instanceof EntityCollectionAccessor &&
			genericPages.entities.reduce(
				(accumulator, datum) => accumulator || (datum instanceof EntityAccessor && datum.isPersisted()),
				false as boolean,
			)

		return (
			<>
				{shouldDisplayCustomPages && (
					<Table>
						{customPages.map(customPage => {
							const currentEntity = siteEntity.data.getField(customPage.field)

							if (!(currentEntity instanceof EntityAccessor) || (!isAdmin && !currentEntity.isPersisted())) {
								return <React.Fragment key={customPage.field}>{null}</React.Fragment>
							}
							return (
								<Table.Row key={customPage.field}>
									<Table.Cell>{customPage.title}</Table.Cell>
									<Table.Cell>
										<ButtonList>
											<PageLinkButton to={customPage.editPageName}>Edit</PageLinkButton>
											{isAdmin && <RemoveButton removeType="delete" immediatePersist={true} />}
										</ButtonList>
									</Table.Cell>
								</Table.Row>
							)
						})}
					</Table>
				)}
				{!shouldDisplayGenericPages && (
					<div>
						{shouldDisplayCustomPages && 'There are no generic pages.'}
						{!shouldDisplayCustomPages && 'There are no pages.'}
					</div>
				)}
				{shouldDisplayGenericPages && genericPages && (
					<Table>
						<ToMany.AccessorRenderer accessor={genericPages}>
							<Table.Row>{genericPageTableBody}</Table.Row>
						</ToMany.AccessorRenderer>
					</Table>
				)}
			</>
		)
	},
	() => (
		<>
			{customPages.map(customPage => (
				<ToOne field={customPage.field} key={customPage.field}>
					<Field name="id" />
				</ToOne>
			))}
			<ToMany field="genericPages">{genericPageTableBody}</ToMany>
		</>
	),
	'GenericPageList',
)
