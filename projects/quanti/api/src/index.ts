import { AllowAllPermissionFactory, InputValidation, SchemaDefinition } from 'cms-api'
import { Acl, Schema } from '@contember/schema'
import * as modelDefinition from './model'

const model = SchemaDefinition.createModel(modelDefinition)

const acl: Acl.Schema = {
	variables: {},
	roles: {
		admin: {
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
