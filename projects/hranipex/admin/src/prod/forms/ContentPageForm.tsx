import {
	Box,
	Component,
	HiddenField,
	Literal,
	RichEditorNG,
	SlugField,
	SortableRepeater,
	TextField,
	ToOne,
} from 'cms-admin'
import * as React from 'react'
import { ImageField, LinkField, LocaleSideDimension, SiteField } from '../components'
import { SeoForm } from './'

export const ContentPageContentForm = Component(
	() => (
		<ToOne field={'content'}>
			<h2>Content</h2>
			<SiteField />
			<RichEditorNG
				name="type"
				sortBy={'order'}
				field={'blocks'}
				defaultBlock="text"
				inlines={{
					link: {
						renderInline: ({ children, attributes, data, setData }) => (
							<a
								{...attributes}
								style={{ textDecoration: 'underline', color: 'blue' }}
								href={data.href}
								onClick={e => {
									e.preventDefault()
									setData({ href: prompt('Enter url') })
								}}
							>
								{children}
							</a>
						),
						htmlSerializer: {},
						keyboardShortcut: 'mod+l',
						menuButton: () => 'L',
					},
				}}
				marks={{
					bold: {
						renderMark: ({ children, attributes }) => <strong {...attributes}>{children}</strong>,
						htmlSerializer: {},
						keyboardShortcut: 'mod+b',
						menuButton: () => 'B',
					},
				}}
				blocks={{
					text: {
						label: 'Text',
						renderBlock: ({ children }) => <p style={{ minHeight: '1em' }}>{children}</p>,
						valueField: 'text',
						marks: ['bold'],
						inlines: ['link'],
					},
					image: {
						label: 'Image',
						render: <ImageField name={'image'} label={'Image'} />,
					},
					textBox: {
						label: <>Text box</>,
						render: (
							<>
								<TextField name={'title'} size={'large'} label={'Title'} allowNewlines={true} />
								<TextField name={'text'} label={'Text'} allowNewlines={true} />
							</>
						),
					},
					imageBoxLeft: {
						label: <>Image box left</>,
						render: (
							<>
								<TextField name={'title'} size={'large'} label={'Title'} allowNewlines={true} />
								<TextField name={'text'} label={'Text'} allowNewlines={true} />
								<ImageField name={'image'} label={'Image'} />
							</>
						),
					},
					imageBoxRight: {
						label: <>Image box right</>,
						render: (
							<>
								<TextField name={'title'} size={'large'} label={'Title'} allowNewlines={true} />
								<TextField name={'text'} label={'Text'} allowNewlines={true} />
								<ImageField name={'image'} label={'Image'} />
							</>
						),
					},
					imageBoxCircleLeft: {
						label: <>Image box circle</>,
						render: (
							<>
								<>
									<TextField name={'title'} label={'Title'} allowNewlines={true} />
									<TextField name={'text'} label={'Text'} allowNewlines={true} />
									<ImageField name={'image'} label={'Image'} />
								</>
							</>
						),
					},
					grid: {
						label: <>Grid</>,
						render: (
							<>
								<TextField name={'title'} label={'Title'} allowNewlines={true} />
								<TextField name={'buttonCaption'} label={'Button caption'} />
								<LinkField name={'buttonLink'} />
								<ToOne field={'children'}>
									<SortableRepeater field={'items'} sortBy={'order'} removeType={'delete'}>
										<TextField name={'title'} label={'Title'} allowNewlines={true} />
										<TextField name={'text'} label={'Text'} allowNewlines={true} />
										<ImageField name={'image'} label={'Image'} />
									</SortableRepeater>
								</ToOne>
							</>
						),
					},
					circleList: {
						label: <>Circle list</>,
						render: (
							<>
								<TextField name={'title'} label={'Title'} allowNewlines={true} />
								<TextField name={'subtitle'} label={'Subtitle'} allowNewlines={true} />
								<TextField name={'text'} label={'Text'} allowNewlines={true} />
								<ToOne field={'children'}>
									<SortableRepeater field={'items'} sortBy={'order'} removeType={'delete'}>
										<TextField name={'title'} label={'Title'} allowNewlines={true} />
										<TextField name={'text'} label={'Text'} allowNewlines={true} />
										<ImageField name={'image'} label={'Image'} />
										<TextField name={'buttonCaption'} label={'Button caption'} />
										{/*<LinkField name={'buttonLink'} />*/}
									</SortableRepeater>
								</ToOne>
							</>
						),
					},
					squareList: {
						label: <>Square list</>,
						render: (
							<>
								<TextField name={'title'} label={'Title'} allowNewlines={true} />
								<TextField name={'subtitle'} label={'Subtitle'} allowNewlines={true} />
								<TextField name={'text'} label={'Text'} allowNewlines={true} />
								<ToOne field={'children'}>
									<SortableRepeater field={'items'} sortBy={'order'} removeType={'delete'}>
										<TextField name={'title'} label={'Title'} allowNewlines={true} />
										<TextField name={'text'} label={'Text'} allowNewlines={true} />
										<ImageField name={'image'} label={'Image'} />
									</SortableRepeater>
								</ToOne>
							</>
						),
					},
					timeline: {
						label: <>Timeline</>,
						render: (
							<>
								<TextField name={'title'} label={'Title'} allowNewlines={true} />
								<TextField name={'text'} label={'Text'} allowNewlines={true} />
								<ToOne field={'children'}>
									<SortableRepeater field={'items'} sortBy={'order'} removeType={'delete'}>
										<TextField name={'title'} label={'Title'} allowNewlines={true} />
										<TextField name={'text'} label={'Text'} allowNewlines={true} />
									</SortableRepeater>
								</ToOne>
							</>
						),
					},
				}}
			/>
		</ToOne>
	),
	'GenericContentForm',
)

export const ContentPageForm = Component(
	() => (
		<>
			<LocaleSideDimension>
				<Box>
					<TextField name="title" size="large" label={'Title'} />
					<SlugField drivenBy="title" label={'Slug'} name={'slug'} />
					<ContentPageContentForm />
				</Box>
			</LocaleSideDimension>
			<LocaleSideDimension>
				<SeoForm />
			</LocaleSideDimension>
		</>
	),
	'PostForm',
)
