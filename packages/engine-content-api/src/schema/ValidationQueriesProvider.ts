import { GraphQLFieldConfig } from 'graphql'
import { Context } from '../types'
import { getEntity } from '@contember/schema-utils'
import { WhereTypeProvider } from './WhereTypeProvider'
import { EntityInputProvider, EntityInputType } from './mutations'
import { Input, Model } from '@contember/schema'
import { filterObject } from '../utils'
import { GraphQLObjectsFactory } from '@contember/graphql-utils'
import { ResultSchemaTypeProvider } from './ResultSchemaTypeProvider'

type FieldConfig<TArgs> = GraphQLFieldConfig<Context, any, TArgs>

export class ValidationQueriesProvider {
	constructor(
		private readonly schema: Model.Schema,
		private readonly whereTypeProvider: WhereTypeProvider,
		private readonly createEntityInputProvider: EntityInputProvider<EntityInputType.create>,
		private readonly updateEntityInputProvider: EntityInputProvider<EntityInputType.update>,
		private readonly graphqlObjectFactories: GraphQLObjectsFactory,
		private readonly resultSchemaTypeProvider: ResultSchemaTypeProvider,
	) {}

	public getQueries(entityName: string): { [fieldName: string]: FieldConfig<any> } {
		const validations: { [fieldName: string]: FieldConfig<any> | undefined } = {}
		validations[`validateCreate${entityName}`] = this.getValidateCreateQuery(entityName)
		validations[`validateUpdate${entityName}`] = this.getValidateUpdateQuery(entityName)

		return filterObject(validations, (key, value): value is FieldConfig<any> => value !== undefined)
	}

	private getValidateCreateQuery(entityName: string): FieldConfig<Input.CreateInput> | undefined {
		const entity = getEntity(this.schema, entityName)
		const dataType = this.createEntityInputProvider.getInput(entityName)
		if (dataType === undefined) {
			return undefined
		}
		return {
			type: this.graphqlObjectFactories.createNotNull(this.resultSchemaTypeProvider.validationResultType),
			args: {
				data: { type: this.graphqlObjectFactories.createNotNull(dataType) },
			},
			resolve: (parent, args, context: Context, info) =>
				context.timer(`GraphQL.query.${info.fieldName}`, () =>
					context.executionContainer.validationResolver.validateCreate(entity, args),
				),
		}
	}

	private getValidateUpdateQuery(entityName: string): FieldConfig<Input.UpdateInput> | undefined {
		const entity = getEntity(this.schema, entityName)
		const dataType = this.updateEntityInputProvider.getInput(entityName)
		if (dataType === undefined) {
			return undefined
		}
		const uniqueWhere = this.whereTypeProvider.getEntityUniqueWhereType(entityName)
		if (!uniqueWhere) {
			return undefined
		}
		return {
			type: this.graphqlObjectFactories.createNotNull(this.resultSchemaTypeProvider.validationResultType),
			args: {
				by: {
					type: this.graphqlObjectFactories.createNotNull(uniqueWhere),
				},
				data: { type: this.graphqlObjectFactories.createNotNull(dataType) },
			},
			resolve: (parent, args, context: Context, info) =>
				context.timer(`GraphQL.query.${info.fieldName}`, () =>
					context.executionContainer.validationResolver.validateUpdate(entity, args),
				),
		}
	}
}