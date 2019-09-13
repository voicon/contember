import { AllowAllPermissionFactory, InputValidation, SchemaDefinition } from '@contember/schema-definition'
import { Acl, Schema } from '@contember/schema'
import * as modelDefinition from './model'

const model = SchemaDefinition.createModel(modelDefinition)

const acl: Acl.Schema = {
	roles: {
		admin: {
			variables: {},
			stages: '*',
			entities: new AllowAllPermissionFactory().create(model),
		},
	},
}

const schema: Schema = {
	model: model,
	acl: acl,
	validation: InputValidation.parseDefinition(modelDefinition),
}

export default schema
