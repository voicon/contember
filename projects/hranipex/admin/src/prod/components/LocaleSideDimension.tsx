import { Component, RelativeSingleField, SideDimensions, ToOne, Variable } from 'cms-admin'
import * as React from 'react'
import { getLocaleFlag } from '../utils'

interface LocaleSideDimensionProps {
	children: React.ReactNode
	toOneField?: RelativeSingleField
}

export const LocaleSideDimension = Component<LocaleSideDimensionProps>(
	({ children, toOneField = 'locales(locale.code=$currentLocaleCode, locale.site.code=$site)' }) => (
		<SideDimensions
			dimension="siteLocale"
			variableName="currentLocaleCode"
			toOneField={toOneField}
			variables={currentLocaleCode => ({
				flag: getLocaleFlag(currentLocaleCode as string),
				labelMiddleware: label => (
					<>
						<Variable name="flag" /> {label}
					</>
				),
			})}
		>
			{children}
		</SideDimensions>
	),
)
