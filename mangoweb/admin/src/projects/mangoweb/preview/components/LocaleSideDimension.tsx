import { Component, SideDimensions, ToOne, Variable } from 'cms-admin'
import * as React from 'react'
import { LangDimension } from '../dimensions'

interface LangSideDimensionProps {}

export const LocaleSideDimension = Component<LangSideDimensionProps>(props => (
	<SideDimensions
		dimension="lang"
		variables={currentLang => {
			return {
				locale: `locales(locale.slug='${currentLang}')`,
				flag: {
					en: '🇬🇧',
					cs: '🇨🇿'
				}[currentLang as LangDimension],
				labelMiddleware: label => (
					<>
						<Variable name="flag" /> {label}
					</>
				)
			}
		}}
	>
		<ToOne field="$locale">{props.children}</ToOne>
	</SideDimensions>
))
