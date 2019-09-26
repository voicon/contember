import * as React from 'react'
import {
	Avatar,
	AvatarField,
	AvatarSize,
	BlockType,
	Button,
	Component,
	FieldText,
	Mark,
	PageLink,
	PageLinkById,
	RemoveButton,
	RichTextField,
	SelectField,
	SortableRepeater,
	Table2Cell,
	Table2Row,
	TextAreaField,
	TextField,
} from 'cms-admin'
import { Image } from './Image'
import { LocaleSideDimension } from '../LocaleSideDimension'
import { Seo } from './Seo'
import { State } from './State'
import { ContentBlock } from './ContentBlock'
import { Link } from './Link'

export const Page = Component(
	() => (
		<>
			<LocaleSideDimension>
				<TextField size="large" label="Header" name="header" />
			</LocaleSideDimension>
			<Image label="Image" name="image" />
			<SelectField
				allowNull={true}
				firstOptionCaption="No category"
				label="Category"
				name="category"
				options="Category.locales(locale.slug='cs').name"
			/>
			<LocaleSideDimension>
				<State name="state" />
				<TextAreaField label="Perex" name="perex" />
				<SortableRepeater field="content" label="Content" sortBy="order">
					<ContentBlock />
				</SortableRepeater>
				<RichTextField
					label="Contact us"
					name="contactUs"
					blocks={[{ block: BlockType.PARAGRAPH, marks: [Mark.BOLD, Mark.LINK] }]}
				/>
				<Seo name="seo" />
				<Link name="link" />
			</LocaleSideDimension>
		</>
	),
	'Page',
)

export const PageListHeader = Component(
	() => (
		<>
			<Table2Row>
				<Table2Cell>
					<Avatar size={AvatarSize.Size2}>CO</Avatar>
				</Table2Cell>
				<Table2Cell>Contact</Table2Cell>
				<Table2Cell />
				<Table2Cell>
					<PageLink
						to="contact"
						Component={props => (
							<Button {...props} Component="a">
								Edit
							</Button>
						)}
					/>
				</Table2Cell>
			</Table2Row>
		</>
	),
	'PageListHeader',
)

export const PageListCells = Component(
	() => (
		<>
			<Table2Cell>
				<AvatarField name="locales(locale.slug='en').header" size={AvatarSize.Size2} />
			</Table2Cell>
			<Table2Cell>
				<LocaleSideDimension>
					<FieldText name="header" />
				</LocaleSideDimension>
			</Table2Cell>
			<Table2Cell>
				<FieldText name="category.locales(locale.slug='en').name" />
			</Table2Cell>
			<Table2Cell>
				<PageLinkById
					change={id => ({ name: 'edit_page', params: { id } })}
					Component={props => (
						<Button {...props} Component="a">
							Edit
						</Button>
					)}
				/>
				<RemoveButton removeType={'delete'} immediatePersist={true} />
			</Table2Cell>
		</>
	),
	'PageListCells',
)
