import { H2, H3 } from '@blueprintjs/core'
import { RichTextField, SideDimensions, TextField, Variable } from 'cms-admin'
import * as React from 'react'
import { LangDimension } from '../dimensions'
import { createVideoField } from './createVideoField'

const frontPageForm = (
	<>
		<H2>Intro</H2>
		{createVideoField('introVideo', 'Vimeo ID for the title video')}
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
			<TextField
				name="$locale.introLabel"
				label={
					<>
						<Variable name="flag" /> Label
					</>
				}
			/>
			<TextField
				name="$locale.introHeading"
				label={
					<>
						<Variable name="flag" /> Heading
					</>
				}
			/>
			<RichTextField
				name="$locale.introBubbleText"
				label={
					<>
						<Variable name="flag" /> Bubble text
					</>
				}
			/>
		</SideDimensions>
	</>
)

export default frontPageForm
