import { Component, SideDimensions, Variable } from 'cms-admin'
import * as React from 'react'
import { LangDimension } from '../dimensions'

interface LangSideDimensionProps {
	children: React.ReactNode
}

export const LocaleSideDimension = Component(
	class extends React.Component<LangSideDimensionProps> {
		public static render(props: LangSideDimensionProps) {
			return (
				<SideDimensions
					dimension="lang"
					variables={currentLang => {
						return {
							locale: `locales(locale=${currentLang})`,
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
					{props.children}
				</SideDimensions>
			)
		}
	}
)
