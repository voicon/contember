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
				labelMiddleware: label => (
					<>
						<Variable name="currentLocaleSlug" /> {label}
					</>
				)
			}
		}}
	>
		{props.children}
	</SideDimensions>
))
