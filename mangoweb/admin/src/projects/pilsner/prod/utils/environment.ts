import { Environment } from 'cms-admin'

export const getSite = (env: Environment): string => {
	const dimensions = env.getAllDimensions()
	if (!dimensions.site) {
		throw new Error('Site dimension not found')
	}
	if (dimensions.site.length !== 1) {
		throw new Error('Exactly one site must be selected')
	}

	return dimensions.site[0]
}
