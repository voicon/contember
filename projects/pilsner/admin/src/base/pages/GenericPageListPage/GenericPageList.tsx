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
	TableRow,
	TableCell,
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
				customPages.reduce<boolean>((accumulator, customPage) => {
					const currentEntity = siteEntity.data.getField(customPage.field)
					return accumulator || (currentEntity instanceof EntityAccessor && currentEntity.isPersisted())
				}, false))

		const shouldDisplayGenericPages =
			genericPages instanceof EntityCollectionAccessor &&
			genericPages.entities.reduce<boolean>(
				(accumulator, datum) => accumulator || (datum instanceof EntityAccessor && datum.isPersisted()),
				false,
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
								<TableRow key={customPage.field}>
									<TableCell>{customPage.title}</TableCell>
									{isAdmin && !currentEntity.isPersisted() && (
										<TableCell>
											<small>This page does not yet exist for this market.</small>
										</TableCell>
									)}
									<TableCell shrunk>
										<ButtonList>
											<PageLinkButton to={customPage.editPageName}>
												{currentEntity.isPersisted() && 'Edit'}
												{!currentEntity.isPersisted() && 'Create'}
											</PageLinkButton>
											{isAdmin && currentEntity.isPersisted() && (
												<ToOne field={customPage.field}>
													<RemoveButton removeType="delete" immediatePersist={true} />
												</ToOne>
											)}
										</ButtonList>
									</TableCell>
								</TableRow>
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
							<TableRow>{genericPageTableBody}</TableRow>
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
