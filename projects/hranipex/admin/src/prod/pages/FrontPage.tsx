import { Box, EditPage, SortableRepeater, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { SeoForm } from '../forms'
import { ImageField, LinkField, LocaleSideDimension } from '../components'

export const FrontPage = (
	<EditPage pageName={'frontPage'} entity={'Site'} where="(code = $site)" rendererProps={{ title: 'Front page' }}>
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
				<Box heading={'Product promo items'}>
					<SortableRepeater sortBy={'order'} field={'productPromoItems'}>
						<TextField name="title" label="Title" />
						<ImageField name={'image'} label={'Image'} />
						<LinkField name={'link'} label={'Link'} />
					</SortableRepeater>
				</Box>
			</LocaleSideDimension>

			<LocaleSideDimension>
				<Box heading={'Content promo'}>
					<ToOne field={'contentPromoBlock'}>
						<TextField name="title" label="Title" />
						<TextField name="buttonCaption" label="Button caption" />
						<LinkField name="buttonLink" label="Button link" />
					</ToOne>

					<h3>Items</h3>
					<SortableRepeater sortBy={'order'} field={'contentPromoItems'}>
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
						<TextField name="buttonCaption" label="Button caption" />
						<LinkField name="buttonLink" label="Button link" />
					</ToOne>

					<h3>Columns</h3>
					<SortableRepeater sortBy={'order'} field={'aboutCompanyColumns'}>
						<TextField name="title" label="Title" />
						<TextField name="text" label="Lines" allowNewlines={true} />
					</SortableRepeater>
				</Box>
			</LocaleSideDimension>

			<LocaleSideDimension>
				<Box heading={'References'}>
					<SortableRepeater sortBy={'order'} field={'references'}>
						<TextField name="name" label="Name" />
						<TextField name="company" label="Company" />
						<TextField name="quote" label="Quote" />
						<ImageField name={'image'} label={'Image'} />
					</SortableRepeater>
				</Box>
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
				<TextField name="newsletterTitle" label="Newsletter title" />
			</LocaleSideDimension>
			<LocaleSideDimension>
				<SeoForm />
			</LocaleSideDimension>
		</ToOne>
	</EditPage>
)
