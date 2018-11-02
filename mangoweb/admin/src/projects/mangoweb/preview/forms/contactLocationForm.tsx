import { H2, H3 } from '@blueprintjs/core'
import { RichTextField, SideDimensions, TextField, Variable } from 'cms-admin'
import * as React from 'react'
import { LangDimension } from '../dimensions'


const contactLocationForm = (
	<>
		<TextField name="email" label="E-mail" />
		<TextField name="phoneNumber" label="Phone number" />
		<SideDimensions
			dimension="lang"
			variableName="currentLang"
			variables={{
				locale: env => `locales(locale=${env.getValue('currentLang')})`,
				flag: env => ({
					en: <>🇬🇧</>,
					cs: <>🇨🇿</>,
				}[env.getValue('currentLang') as LangDimension]),
			}}
		>
			<H3><Variable name="heading" /></H3>
			<TextField name="$locale.title" label={<><Variable name="flag" /> Title</>} />
			<TextField name="$locale.entity" label={<><Variable name="flag" /> Legal entity</>} />
			<RichTextField name="$locale.address" label={<><Variable name="flag" /> Address</>} />
			<RichTextField name="$locale.additionalText" label={<><Variable name="flag" /> Additional info</>} />
		</SideDimensions>
	</>
)

export default contactLocationForm
