import { SideDimensions } from 'cms-admin'
import * as React from 'react'
import { LangDimension } from '../dimensions'

export const langDimension = (content: React.ReactNode) => (
	<SideDimensions
		dimension="lang"
		variableName="currentLang"
		variables={{
			locale: env => `locales(locale=${env.getValue('currentLang')})`,
			flag: env =>
				({
					en: <>🇬🇧</>,
					cs: <>🇨🇿</>
				}[env.getValue('currentLang') as LangDimension])
		}}
	>
		{content}
	</SideDimensions>
)
