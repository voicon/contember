import { SchemaDefinition as d } from 'cms-api'

export class Attribute {
	title = d.stringColumn().notNull()
	values: d.OneHasManyDefinition = d.oneHasMany(AttributeValue, 'attribute')
}

export class AttributeValue {
	attribute = d
		.manyHasOne(Attribute, 'values')
		.notNull()
		.cascadeOnDelete()
	value = d.stringColumn().notNull()
	url = d.stringColumn()
}
