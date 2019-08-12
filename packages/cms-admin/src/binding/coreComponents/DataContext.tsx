import { GraphQlBuilder } from 'cms-client'
import { Input } from '@contember/schema'
import * as React from 'react'
import { FieldName, Filter } from '../bindingTypes'
import {
	AccessorTreeRoot,
	DataBindingError,
	EntityAccessor,
	EntityCollectionAccessor,
	EntityForRemovalAccessor,
	Errorable,
	FieldAccessor,
	ReferenceMarker,
} from '../dao'
import { EnforceSubtypeRelation } from './EnforceSubtypeRelation'

export type DataContextValue = undefined | FieldAccessor | EntityAccessor | AccessorTreeRoot | EntityForRemovalAccessor

type _EntityAccessorErrorable = EnforceSubtypeRelation<EntityAccessor, Errorable>
type _FieldAccessorErrorable = EnforceSubtypeRelation<FieldAccessor, Errorable>

export const DataContext = React.createContext<DataContextValue>(undefined)

export const useEntityContext = (): EntityAccessor => {
	const data = React.useContext(DataContext)

	if (!(data instanceof EntityAccessor)) {
		throw new DataBindingError(`Corrupted data`)
	}
	return data
}

export const useEntityAccessor = (
	field: FieldName,
	filter?: Filter,
	reducedBy?: Input.UniqueWhere<GraphQlBuilder.Literal>,
) => {
	const data = useEntityContext()
	const desiredField = data.data.getField(field, ReferenceMarker.ExpectedCount.UpToOne, filter, reducedBy)

	if (!(desiredField instanceof EntityAccessor)) {
		return undefined
	}
	return desiredField
}

export const useEntityCollectionAccessor = (field: FieldName, filter?: Filter) => {
	const data = useEntityContext()
	const desiredField = data.data.getField(field, ReferenceMarker.ExpectedCount.PossiblyMany, filter)

	if (!(desiredField instanceof EntityCollectionAccessor)) {
		return undefined
	}
	return desiredField
}
