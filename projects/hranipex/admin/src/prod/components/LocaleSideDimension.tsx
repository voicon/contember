import { Component, SideDimensions, ToOne, Variable } from 'cms-admin'
import * as React from 'react'
import { getLocaleFlag } from '../utils'

interface LangSideDimensionProps {}

export const LocaleSideDimensionBase = Component<LangSideDimensionProps>(props => (
	<SideDimensions
		dimension="siteLocale"
		variableName="currentLocaleCode"
		variables={currentLocaleCode => ({
			flag: getLocaleFlag(currentLocaleCode as string),
			labelMiddleware: label => (
				<>
					<Variable name="flag" /> {label}
				</>
			),
		})}
	>
		{props.children}
	</SideDimensions>
))

export const LocaleSideDimension = Component<LangSideDimensionProps>(props => (
	<LocaleSideDimensionBase {...props}>
		<ToOne field="locales(locale.code=$currentLocaleCode, locale.site.code=$site)">{props.children}</ToOne>
	</LocaleSideDimensionBase>
))
