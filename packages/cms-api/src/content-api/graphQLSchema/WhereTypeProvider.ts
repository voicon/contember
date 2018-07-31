import { GraphQLInputObjectType, GraphQLList } from "graphql"
import { GraphQLInputFieldConfig, GraphQLInputFieldConfigMap, GraphQLNonNull } from "graphql/type/definition"
import { Entity, FieldVisitor, JoiningColumnRelation, Schema } from "../../content-schema/model"
import { acceptFieldVisitor, getEntity } from "../../content-schema/modelUtils"
import singletonFactory from "../../utils/singletonFactory"
import { capitalizeFirstLetter } from "../../utils/strings"
import { isIt } from "../../utils/type"
import ColumnTypeResolver from "./ColumnTypeResolver"
import ConditionTypeProvider from "./ConditionTypeProvider"
import { GqlTypeName } from "./utils"

export default class WhereTypeProvider
{
  private schema: Schema

  private whereSingleton = singletonFactory(name => this.createEntityWhereType(name))
  private uniqueWhereSingleton = singletonFactory(name => this.createEntityUniqueWhereType(name))
  private columnTypeResolver: ColumnTypeResolver
  private conditionTypeProvider: ConditionTypeProvider

  constructor(schema: Schema, columnTypeResolver: ColumnTypeResolver, conditionTypeProvider: ConditionTypeProvider)
  {
    this.schema = schema
    this.columnTypeResolver = columnTypeResolver
    this.conditionTypeProvider = conditionTypeProvider
  }

  public getEntityWhereType(entityName: string): GraphQLInputObjectType
  {
    return this.whereSingleton(entityName)
  }

  public getEntityUniqueWhereType(entityName: string)
  {
    return this.uniqueWhereSingleton(entityName)
  }

  private createEntityWhereType(entityName: string)
  {
    const where: GraphQLInputObjectType = new GraphQLInputObjectType({
      name: GqlTypeName`${entityName}Where`,
      fields: () => this.getEntityWhereFields(entityName, where),
    })

    return where
  }

  private createEntityUniqueWhereType(entityName: string)
  {
    const entity = getEntity(this.schema, entityName)

    const combinations: string[] = []
    const uniqueKeys: string[][] = [[entity.primary], ...entity.unique.map(it => it.fields)]
    for (const uniqueKey of uniqueKeys) {
      combinations.push(uniqueKey.join(", "))
    }
    const description = `Valid combinations are: (${combinations.join("), (")})`

    return new GraphQLInputObjectType({
      name: capitalizeFirstLetter(entityName) + "UniqueWhere",
      // description: description, generates invalid schema file
      fields: () => this.getUniqueWhereFields(entity),
    })
  }

  private getUniqueWhereFields(entity: Entity)
  {
    const uniqueKeys: string[][] = [[entity.primary], ...entity.unique.map(it => it.fields)]
    const fields: GraphQLInputFieldConfigMap = {}
    for (const uniqueKey of uniqueKeys) {
      for (const field of uniqueKey) {
        if (fields[field] !== undefined) {
          continue
        }
        fields[field] = acceptFieldVisitor(this.schema, entity, field, {
          visitRelation: (entity, relation, targetEntity) => {
            if (isIt<JoiningColumnRelation>(relation, "joiningColumn")) {
              return acceptFieldVisitor(this.schema, targetEntity, targetEntity.primary, {
                visitColumn: (entity, column) => ({type: this.columnTypeResolver.getType(column.type)}),
                visitRelation: () => {
                  throw new Error()
                },
              })
            }
            throw new Error("Only column or owning relation can be a part of unique kkey")
          },
          visitColumn: (entity, column) => ({type: this.columnTypeResolver.getType(column.type)}),
        })
      }
    }
    return fields
  }

  private getEntityWhereFields(name: string, where: GraphQLInputObjectType)
  {
    const fields: GraphQLInputFieldConfigMap = {}
    const entity = this.schema.entities[name]

    for (const fieldName in entity.fields) {
      if (!entity.fields.hasOwnProperty(fieldName)) {
        continue
      }
      fields[fieldName] = acceptFieldVisitor(this.schema, name, fieldName, {
        visitColumn: (entity, column) => ({type: this.conditionTypeProvider.getCondition(column.type)}),
        visitRelation: (entity, relation) => ({type: this.getEntityWhereType(relation.target)}),
      } as FieldVisitor<GraphQLInputFieldConfig>)
    }

    fields.and = {type: new GraphQLList(new GraphQLNonNull(where))}
    fields.or = {type: new GraphQLList(new GraphQLNonNull(where))}
    fields.not = {type: where}

    return fields
  }
}
