import { SchemaDefinition as d } from 'cms-api'

export class DeploymentConfig {
	unique = d
		.enumColumn(d.createEnum('one'))
		.notNull()
		.unique()
	apiKey = d.stringColumn().notNull()
}

export class Deployment {
	startedAt = d.dateTimeColumn().notNull()
	finishedAt = d.dateTimeColumn()
	failedAt = d.dateTimeColumn()
	failureReason = d.stringColumn()
}
