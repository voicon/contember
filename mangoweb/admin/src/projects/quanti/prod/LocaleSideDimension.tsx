import { Component, SideDimensions, Variable } from 'cms-admin'
import * as React from 'react'

interface LangSideDimensionProps {}

export const LocaleSideDimension = Component<LangSideDimensionProps>(props => (
	<SideDimensions
		dimension="locale"
		variables={currentLang => {
			return {
				locale: `locales(locale.slug='${currentLang}')`,
				currentLocaleSlug: currentLang,
				flag: {
					en: '🇬🇧',
					cs: '🇨🇿'
				}[currentLang as 'en' | 'cs'],
				labelMiddleware: label => (
					<>
						<Variable name="flag" /> {label}
					</>
				)
			}
		}}
	>
		{props.children}
	</SideDimensions>
))
