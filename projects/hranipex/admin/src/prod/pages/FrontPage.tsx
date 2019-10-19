import { Box, EditPage, SelectField, SortableRepeater, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { SeoForm } from '../forms'
import { ImageField, LinkField, LocaleSideDimension } from '../components'

export const FrontPage = (
	<EditPage pageName={'frontPage'} entityName="Site" where="(code = $site)" rendererProps={{ title: 'Front page' }}>
		<ToOne field={'frontPage'}>
			<LocaleSideDimension>
				<Box heading={'Intro block'}>
					<ToOne field={'introBlock'}>
						<TextField name="title" label="Title" size={'large'} />
						<TextField name="text" label="Text" />
						<ImageField name={'image'} label={'Image'} />
						<TextField name="buttonCaption" label="Button caption" />
					</ToOne>
				</Box>
			</LocaleSideDimension>

			<LocaleSideDimension>
				<SortableRepeater
					sortBy={'order'}
					field={'productPromoItems'}
					removeType={'delete'}
					label={'Product promo items'}
				>
					<TextField name="title" label="Title" />
					<ImageField name={'image'} label={'Image'} />
					<LinkField name={'link'} label={'Link'} />
					<SelectField name="shape" options="IconShape.identifier" label="Icon" />
				</SortableRepeater>
			</LocaleSideDimension>

			<LocaleSideDimension>
				<Box heading={'Content promo'}>
					<ToOne field={'contentPromoBlock'}>
						<TextField name="title" label="Title" />
						<TextField name="buttonCaption" label="Button caption" />
						<LinkField name="buttonLink" label="Button link" />
					</ToOne>

					<SortableRepeater sortBy={'order'} field={'contentPromoItems'} removeType={'delete'} label="Items">
						<TextField name="title" label="Title" />
						<TextField name="subtitle" label="Subtitle" />
						<LinkField name="link" label="Link" />
						<ImageField name={'image'} label={'Image'} />
						<TextField name="buttonCaption" label="Button caption" />
					</SortableRepeater>
				</Box>
			</LocaleSideDimension>
			<LocaleSideDimension>
				<Box heading={'About company'}>
					<ToOne field={'aboutCompanyBlock'}>
						<TextField name="title" label="Title" />
						<TextField name="subtitle" label="Subtitle" />
						<ImageField name={'image'} label={'Image'} />
						<LinkField name="link" label="Main link" />
						<TextField name="buttonCaption" label="Button caption" />
						<LinkField name="buttonLink" label="Button link" />
					</ToOne>

					<SortableRepeater sortBy={'order'} field={'aboutCompanyColumns'} removeType={'delete'} label="Columns">
						<TextField name="title" label="Title" />
						<TextField name="text" label="Lines" allowNewlines={true} />
					</SortableRepeater>
				</Box>
			</LocaleSideDimension>

			<LocaleSideDimension>
				<SortableRepeater sortBy={'order'} field={'references'} removeType={'delete'} label={'References'}>
					<TextField name="name" label="Name" />
					<TextField name="company" label="Company" />
					<TextField name="quote" label="Quote" />
					<ImageField name={'image'} label={'Image'} />
					<LinkField name="link" label="Link" />
				</SortableRepeater>
			</LocaleSideDimension>

			<LocaleSideDimension>
				<Box heading={'Join us block'}>
					<ToOne field={'joinUsBlock'}>
						<TextField name="title" label="Top text" />
						<TextField name="subtitle" label="Bottom text" />
						<ImageField name={'image'} label={'Image'} />
						<TextField name="buttonCaption" label="Button caption" />
						<LinkField name="buttonLink" label="Button link" />
					</ToOne>
				</Box>
			</LocaleSideDimension>
			<LocaleSideDimension>
				<Box>
					<TextField name="newsletterTitle" label="Newsletter title" />
				</Box>
			</LocaleSideDimension>
			<LocaleSideDimension>
				<SeoForm />
			</LocaleSideDimension>
		</ToOne>
	</EditPage>
)
