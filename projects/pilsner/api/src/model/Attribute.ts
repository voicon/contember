import { SchemaDefinition as d } from '@contember/schema-definition'
import { Pub } from './Pub'
import { Tapster } from './Tapster'

export class AttributeSet {
	attributes = d.oneHasMany(Attribute, 'set')
	pub: d.OneHasOneInversedDefinition = d.oneHasOneInversed(Pub, 'attributeSet')
	tapster: d.OneHasOneInversedDefinition = d.oneHasOneInversed(Tapster, 'attributeSet')
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
