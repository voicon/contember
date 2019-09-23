import { Component, SideDimensions, ToOne, Variable } from 'cms-admin'
import * as React from 'react'

interface LangSideDimensionProps {}

export const LocaleSideDimension = Component<LangSideDimensionProps>(props => (
	<SideDimensions
		dimension="siteLocale"
		variableName="currentLocaleCode"
		variables={currentLocaleCode => ({
			flag: (
				<img
					src={'https://cz-hranipex.mgw.cz/assets/images/flags-locale/' + currentLocaleCode + '.svg'}
					style={{ width: '20px' }}
				/>
			),
			labelMiddleware: label => (
				<>
					<Variable name="flag" /> {label}
				</>
			),
		})}
	>
		<ToOne field="locales(locale.code=$currentLocaleCode, locale.site.code=$site)">{props.children}</ToOne>
	</SideDimensions>
))
