import { Component, SideDimensions, ToOne, Variable } from 'cms-admin'
import * as React from 'react'

type LangDimension = 'cs' | 'en'

interface LangSideDimensionProps {}

export const LocaleSideDimension = Component<LangSideDimensionProps>(props => (
	<SideDimensions
		dimension="locale"
		variableName="currentLangSlug"
		variables={currentLangSlug => {
			return {
				flag: {
					en: '🇬🇧',
					cs: '🇨🇿',
				}[currentLangSlug as LangDimension],
				labelMiddleware: label => (
					<>
						<Variable name="flag" /> {label}
					</>
				),
			}
		}}
	>
		<ToOne field="locales(locale.slug=$currentLangSlug)">{props.children}</ToOne>
	</SideDimensions>
))
