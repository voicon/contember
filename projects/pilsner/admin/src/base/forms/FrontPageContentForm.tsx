import {
	Block,
	Component,
	Literal,
	SortableBlockRepeater,
	SortableRepeater,
	TextAreaField,
	TextField,
	ToOne,
} from 'cms-admin'
import * as React from 'react'
import { ImageField } from '../components'

export const FrontPageContentForm = Component(
	() => (
		<SortableBlockRepeater sortBy={'order'} field={'content.blocks'} discriminationField="type">
			<Block discriminateBy="frontTextBox" label="Text box">
				<TextField name="title" label={'Title'} allowNewlines={true} />
				<TextField name="subtitle" label={'Subtitle'} allowNewlines={true} />
				<TextAreaField name="text" label={'Text'} />
			</Block>
			<Block discriminateBy="frontHalfImageLight" label={'"Light" image with text half split'}>
				<TextField name="title" label={'Title'} allowNewlines={true} />
				<TextAreaField name="text" label={'Text'} />
				<ImageField name={'image'} label={'Image'} />
				<TextField name="buttonCaption" label={'Button caption'} allowNewlines={true} />
				<TextField name="url" label={'Button url'} />
			</Block>
			<Block discriminateBy="frontHalfImageLeft" label="Image with text half split left">
				<TextField name="title" label={'Title'} allowNewlines={true} />
				<TextAreaField name="text" label={'Text'} />
				<ImageField name={'image'} label={'Image'} />
			</Block>
			<Block discriminateBy="frontHalfImageRight" label="Image with text half split right">
				<TextField name="title" label={'Title'} allowNewlines={true} />
				<TextAreaField name="text" label={'Text'} />
				<ImageField name={'image'} label={'Image'} />
			</Block>
			<Block discriminateBy="frontPhotoBoxLeft" label="Photo box left">
				<TextField name="title" label={'Title'} allowNewlines={true} />
				<TextAreaField name="text" label={'Text'} />
				<ImageField name={'image'} label={'Image'} />
			</Block>
			<Block discriminateBy="frontPhotoBoxRight" label="Photo box right">
				<TextField name="title" label={'Title'} allowNewlines={true} />
				<TextAreaField name="text" label={'Text'} />
				<ImageField name={'image'} label={'Image'} />
			</Block>
			<Block discriminateBy="frontLargeImage" label="Large photo">
				<ImageField name={'image'} label={'Image'} />
			</Block>
			<Block discriminateBy="frontLargeImageWithTextBox" label="Text and large photo">
				<TextField name="title" label={'Title'} allowNewlines={true} />
				<TextField name="subtitle" label={'Subtitle'} allowNewlines={true} />
				<TextAreaField name="text" label={'Text'} />
				<ImageField name={'image'} label={'Image'} />
			</Block>
			<Block discriminateBy="frontPhoneGallery" label="Phone gallery">
				<ToOne field={'gallery'}>
					<SortableRepeater sortBy={'order'} field={'images'} removeType={'delete'}>
						<ImageField name={'image'} label={undefined} single={true} />
					</SortableRepeater>
				</ToOne>
			</Block>
			<Block discriminateBy="frontDesktopGallery" label="Desktop gallery">
				<ToOne field={'gallery'}>
					<SortableRepeater sortBy={'order'} field={'images'} removeType={'delete'}>
						<ImageField name={'image'} label={undefined} single={true} />
					</SortableRepeater>
				</ToOne>
			</Block>
			<Block discriminateBy="frontCarousel" label="Carousel">
				<TextField name="title" label={'Title'} allowNewlines={true} />
				<TextAreaField name="text" label={'Text'} />
				<ToOne field={'gallery'}>
					<SortableRepeater sortBy={'order'} field={'images'} removeType={'delete'}>
						<TextAreaField name="caption" label={'Caption'} />
						<ImageField name={'image'} label={'Image'} />
					</SortableRepeater>
				</ToOne>
			</Block>
		</SortableBlockRepeater>
	),
	'FrontPageContentForm',
)
