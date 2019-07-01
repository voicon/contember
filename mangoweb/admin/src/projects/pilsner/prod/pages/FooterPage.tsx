import * as React from 'react'
import { AlternativeFields, EditPage, Literal, SelectField, SortableRepeater, TextField } from 'cms-admin'
import { getSite } from '../utils/environment'
import { ImageField } from '../components'

export const FooterPage = (
	<EditPage pageName={'footer'} entity={'Footer'} where={({}, env) => ({ site: { slug: getSite(env) } })}>
		<h1 style={{ color: '#777' }}>Footer</h1>
		<div className={'inputBox'}>
			<div className={'inputBox-header'}>
				<h2>Contact us</h2>
			</div>
			<div className={'inputBox-row'}>
				<TextField name={'contactLabel'} label={'Label'} />
				<TextField name={'contactLink'} label={'Link'} />
			</div>
		</div>

		<div className={'inputBox'}>
			<div className={'inputBox-header'}>
				<h2>Copyright</h2>
			</div>
			<TextField name={'copyright'} />
			<TextField name={'copyrightJap'} label={'JAP version only'} />
		</div>

		<div className={'inputBox'}>
			<div className={'inputBox-header'}>
				<h2>Don't drink and drive</h2>
			</div>
			<TextField name={'dontDriveSticky'} label={'Sticky'} />
			<TextField name={'dontDriveHeading'} label={'Main text'} />
			<TextField name={'dontDriveLink'} label={'Link'} />
		</div>
		<div className={'inputBox'}>
			<div className={'inputBox-header'}>
				<h2>Links</h2>
			</div>
			<SortableRepeater sortBy={'order'} field={'links'}>
				<TextField name={'caption'} />
				<AlternativeFields
					name="linkType"
					alternatives={[
						[
							new Literal('external'),
							'External',
							<>
								<TextField name={'linkUrl'} label={'URL'} />
							</>
						],
						[
							new Literal('internal'),
							'Internal',
							<>
								<SelectField name={'link'} label={'link'} options={'Linkable.url'} />
							</>
						]
					]}
				/>
			</SortableRepeater>
		</div>
	</EditPage>
)
