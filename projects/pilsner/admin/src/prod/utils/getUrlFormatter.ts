import { Environment } from 'cms-admin'

export const getUrlFormatter = (prefix: string) => (currentValue: string, environment: Environment) => {
	const site = environment.getDimension('site')[0]
	const langPrefix = site === 'en' ? '' : `/${site}`

	return `${langPrefix}${prefix}${currentValue}`
}
