import { SlugField, SlugFieldProps, Component, Environment } from 'cms-admin'
import * as React from 'react'

export interface LinkUrlFieldProps extends Partial<SlugFieldProps> {
	drivenBy: SlugFieldProps['drivenBy']
	softPrefix?: string
}

export const LinkUrlField = Component<LinkUrlFieldProps>(
	({ softPrefix, drivenBy, ...props }) => (
		<SlugField
			name="link.url"
			drivenBy={drivenBy}
			format={(currentValue: string, environment: Environment) => {
				const site = environment.getDimension('site')[0]
				const langPrefix = site === 'en' ? '' : site

				return `${langPrefix}${softPrefix || ''}${currentValue}`
			}}
			label="URL"
			unpersistedHardPrefix="pilsnerurquell.com"
			persistedHardPrefix="/"
			{...props}
		/>
	),
	'LinkUrlField',
)
