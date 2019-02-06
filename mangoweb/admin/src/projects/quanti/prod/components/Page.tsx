import * as React from 'react'
import { Component, TextField, SortableRepeater } from 'cms-admin'
import { Image } from './Image'
import { LocaleSideDimension } from '../LocaleSideDimension'
import { Seo } from './Seo'
import { State } from './State'
import { Block } from './Block'
import { Link } from './Link'

export const Page = Component<{}>(
	() => (
		<>
			<LocaleSideDimension>
				<TextField large={true} label="Header" name="$locale.header" />
			</LocaleSideDimension>
			<Image label="Image" name="image" />
			<LocaleSideDimension>
				<State name="$locale.state" />
				<TextField label="Perex" name="$locale.perex" />
				<SortableRepeater field="$locale.content" label="Content" sortBy="order">
					<Block />
				</SortableRepeater>
				<TextField label="Contact us" name="$locale.contactUs" />
				<Seo name="$locale.seo" />
				<Link name="$locale.link" />
			</LocaleSideDimension>
		</>
	),
	'Page'
)
