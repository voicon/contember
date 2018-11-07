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
					variableName="currentLang"
					variables={{
						locale: env => `locales(locale=${env.getValue('currentLang')})`,
						flag: env =>
							({
								en: '🇬🇧',
								cs: '🇨🇿'
							}[env.getValue('currentLang') as LangDimension]),
						labelMiddleware: label => (
							<>
								<Variable name="flag" /> {label}
							</>
						)
					}}
				>
					{props.children}
				</SideDimensions>
			)
		}
	}
)
