import { H2, H3 } from '@blueprintjs/core'
import { RichTextField, SideDimensions, TextField, Variable } from 'cms-admin'
import * as React from 'react'
import { LangDimension } from '../dimensions'


const frontPageForm = (
	<>
		<H2>Intro</H2>
		<TextField name="vimeoId" label="Vimeo ID for the title video"/>
		<SideDimensions
			dimension="lang"
			variableName="currentLang"
			variables={{
				locale: env => `locales(locale=${env.getValue('currentLang')})`,
				heading: env => ({
					en: 'English',
					cs: 'Czech',
				}[env.getValue('currentLang') as LangDimension]),
			}}
		>
			<H3><Variable name="heading" /></H3>
			<TextField name="$locale.introShort" label="Position" />
			<RichTextField name="$locale.introLong" label="Short bio" />
		</SideDimensions>
	</>
)

export default frontPageForm
