import { Component, SideDimensions, ToOne, Variable } from 'cms-admin'
import * as React from 'react'
import { getLocaleFlag } from '../utils'

interface BaseLocaleSideDimensionProps {
	children: React.ReactNode
}

export const LocaleSideDimensionBase = Component<BaseLocaleSideDimensionProps>(props => (
	<SideDimensions
		dimension="siteLocale"
		variableName="currentLocaleCode"
		variables={currentLocaleCode => ({
			flag: getLocaleFlag(currentLocaleCode as string),
			labelMiddleware: label => <>{label}</>,
		})}
	>
		<div style={{ textAlign: 'center' }}>
			<Variable name="flag" />
		</div>
		{props.children}
	</SideDimensions>
))

interface LocaleSideDimensionProps {
	children: React.ReactNode
}

export const LocaleSideDimension = Component<LocaleSideDimensionProps>(props => (
	<LocaleSideDimensionBase>
		<ToOne field="locales(locale.code=$currentLocaleCode, locale.site.code=$site)">{props.children}</ToOne>
	</LocaleSideDimensionBase>
))
