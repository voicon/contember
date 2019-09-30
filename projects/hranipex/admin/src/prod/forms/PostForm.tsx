import { Box, Component, RichEditorNG, SlugField, TextAreaField, TextField, ToOne } from 'cms-admin'
import * as React from 'react'
import { ImageField, IsPublishedField, LocaleSideDimension, SiteField } from '../components'
import { SeoForm } from './'

export const GenericContentForm = Component(
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
				}}
			/>
		</ToOne>
	),
	'GenericContentForm',
)

export const PostForm = Component(
	() => (
		<>
			<LocaleSideDimension>
				<Box>
					<TextField name="title" size="large" label={'Title'} />
					<SlugField drivenBy="title" label={'Slug'} name={'slug'} />
					<ImageField name={'image'} label={'Image'} />
					<TextAreaField name="perex" label="Perex" />
					<GenericContentForm />
				</Box>
			</LocaleSideDimension>
			<LocaleSideDimension>
				<SeoForm />
			</LocaleSideDimension>
		</>
	),
	'PostForm',
)

export const PostFormSide = Component(() => <IsPublishedField />, 'PostFormSide')
