import { SchemaDefinition as d } from 'cms-api'

export class AttributeSet {
	attributes = d.oneHasMany(Attribute, 'set')
}

export class Attribute {
	set: d.ManyHasOneDefinition = d
		.manyHasOne(AttributeSet, 'attributes')
		.notNull()
		.cascadeOnDelete()
	order = d.intColumn().notNull()
	title = d.stringColumn().notNull()
	values: d.OneHasManyDefinition = d.oneHasMany(AttributeValue, 'attribute')
}

export class AttributeValue {
	attribute = d
		.manyHasOne(Attribute, 'values')
		.notNull()
		.cascadeOnDelete()
	order = d.intColumn().notNull()
	value = d.stringColumn().notNull()
	url = d.stringColumn()
}
