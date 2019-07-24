import { AlternativeFields, Component, Literal, SortableRepeater, TextAreaField, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { ImageField } from '../components'

export const FrontPageContentForm = Component(
	() => (
		<SortableRepeater sortBy={'order'} field={'content.blocks'}>
			<AlternativeFields
				name="type"
				alternatives={[
					[
						new Literal('frontTextBox'),
						'Text box',
						<>
							<TextField name="title" label={'Title'} />
							<TextField name="subtitle" label={'Subtitle'} />
							<TextAreaField name="text" label={'Text'} />
						</>
					],
					[
						new Literal('frontHalfImageLight'),
						'"Light" image with text half split',
						<>
							<TextField name="title" label={'Title'} />
							<TextAreaField name="text" label={'Text'} />
							<ImageField name={'image'} label={'Image'} />
							<TextField name="buttonCaption" label={'Button caption'} />
							<TextField name="url" label={'Button url'} />
						</>
					],
					[
						new Literal('frontHalfImageLeft'),
						'Image with text half split left',
						<>
							<TextField name="title" label={'Title'} />
							<TextAreaField name="text" label={'Text'} />
							<ImageField name={'image'} label={'Image'} />
						</>
					],
					[
						new Literal('frontHalfImageRight'),
						'Image with text half split right',
						<>
							<TextField name="title" label={'Title'} />
							<TextAreaField name="text" label={'Text'} />
							<ImageField name={'image'} label={'Image'} />
						</>
					],
					[
						new Literal('frontPhotoBoxLeft'),
						'Photo box left',
						<>
							<TextField name="title" label={'Title'} />
							<TextAreaField name="text" label={'Text'} />
							<ImageField name={'image'} label={'Image'} />
						</>
					],
					[
						new Literal('frontPhotoBoxRight'),
						'Photo box right',
						<>
							<TextField name="title" label={'Title'} />
							<TextAreaField name="text" label={'Text'} />
							<ImageField name={'image'} label={'Image'} />
						</>
					],
					[
						new Literal('frontLargeImage'),
						'Large photo',
						<>
							<ImageField name={'image'} label={'Image'} />
						</>
					],
					[
						new Literal('frontLargeImageWithTextBox'),
						'Text and large photo',
						<>
							<TextField name="title" label={'Title'} />
							<TextField name="subtitle" label={'Subtitle'} />
							<TextAreaField name="text" label={'Text'} />
							<ImageField name={'image'} label={'Image'} />
						</>
					],
					[
						new Literal('frontPhoneGallery'),
						'Phone gallery',
						<>
							<ToOne field={'gallery'}>
								<SortableRepeater sortBy={'order'} field={'images'} removeType={'delete'}>
									<ImageField name={'image'} label={'Image'} single={true} />
								</SortableRepeater>
							</ToOne>
						</>
					],
					[
						new Literal('frontDesktopGallery'),
						'Desktop gallery',
						<>
							<ToOne field={'gallery'}>
								<SortableRepeater sortBy={'order'} field={'images'} removeType={'delete'}>
									<ImageField name={'image'} label={'Image'} single={true} />
								</SortableRepeater>
							</ToOne>
						</>
					],
					[
						new Literal('frontCarousel'),
						'Carousel',
						<>
							<TextField name="title" label={'Title'} />
							<TextAreaField name="text" label={'Text'} />
							<ToOne field={'gallery'}>
								<SortableRepeater sortBy={'order'} field={'images'} removeType={'delete'}>
									<TextAreaField name="caption" label={'Caption'} />
									<ImageField name={'image'} label={'Image'} />
								</SortableRepeater>
							</ToOne>
						</>
					]
				]}
			/>
		</SortableRepeater>
	),
	'FrontPageContentForm'
)
