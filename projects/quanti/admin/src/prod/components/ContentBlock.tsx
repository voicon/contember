import {
	Block,
	BlockType,
	Component,
	DiscriminatedBlocks,
	Mark,
	RichTextField,
	SelectField,
	SortableRepeater,
	TextField,
} from 'cms-admin'
import * as React from 'react'
import { Image } from './Image'
import { ImageGrid } from './ImageGrid'

export const ContentBlock = Component(
	() => (
		<>
			<DiscriminatedBlocks name="type" label={undefined}>
				<Block discriminateBy="Heading" label="Heading">
					<TextField name="text" label="Heading" />
				</Block>
				<Block discriminateBy="Text" label="Text">
					<RichTextField
						name="text"
						blocks={[{ block: BlockType.PARAGRAPH, marks: [Mark.BOLD, Mark.LINK] }]}
						label="Text"
					/>
				</Block>
				<Block discriminateBy="Image" label="Image">
					<Image name="image" />
				</Block>
				<Block discriminateBy="ImageGrid" label="ImageGrid">
					<ImageGrid name="imageGrid" />
				</Block>
				<Block discriminateBy="Numbers" label="Numbers">
					<SortableRepeater field="numbers" sortBy="order">
						<TextField label="number" name="number" />
						<TextField label="label" name="label" />
					</SortableRepeater>
				</Block>
				<Block discriminateBy="Perks" label="Perks">
					<SortableRepeater field="perks" sortBy="order">
						<TextField label="title" name="title" />
						<TextField label="description" name="description" />
					</SortableRepeater>
				</Block>
				<Block discriminateBy="People" label="People">
					<SortableRepeater field="people" sortBy="order">
						<SelectField label="Person" name="person" options="Person.locales(locale.slug='cs').name" />
					</SortableRepeater>
				</Block>
				<Block discriminateBy="Category" label="Category">
					<SelectField label="Category" name="category" options="Category.locales(locale.slug='cs').name" />
				</Block>
				<Block discriminateBy="Collapse" label="Collapse">
					<TextField name="collapse.title" label={undefined} />
					<SortableRepeater field="collapse.items" sortBy="order">
						<TextField label="heading" name="heading" />
						<RichTextField
							name="text"
							blocks={[{ block: BlockType.PARAGRAPH, marks: [Mark.BOLD, Mark.LINK] }]}
							label={undefined}
						/>
						<Image name="image" />
						<TextField label="link URL" name="linkTarget" />
						<TextField label="link caption" name="linkCaption" />
					</SortableRepeater>
				</Block>
			</DiscriminatedBlocks>
		</>
	),
	'Block',
)
