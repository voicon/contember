import * as React from 'react'
import { H1, H2 } from '@blueprintjs/core'
import { Component, TextField, RichTextField, LineBreakBehavior, SortableRepeater } from 'cms-admin'
import { LocaleSideDimension } from '../LocaleSideDimension'
import { ImageGrid } from './ImageGrid'
import { Seo } from './Seo'
import { Person } from './Person'
import { Link } from './Link'

export const FrontPage = Component<{}>(
	() => (
		<>
			<LocaleSideDimension>
				<TextField label="Heading" name="$locale.header" />
				<TextField label="Quote" name="$locale.quote" />
			</LocaleSideDimension>
			<H2>Partners</H2>
			<LocaleSideDimension>
				<TextField label="Header" name="$locale.partnersHeader" />
				<RichTextField label="Content" name="$locale.partnersContent" lineBreakBehavior={LineBreakBehavior.DISABLE} />
			</LocaleSideDimension>
			<H2>Image grid</H2>
			<ImageGrid name="imageGrid" />
			<LocaleSideDimension>
				<Seo name="$locale.seo" />
			</LocaleSideDimension>
			<H2>Links</H2>
			<LocaleSideDimension>
				<Link name="$locale.link" />
			</LocaleSideDimension>
			<H2>People</H2>
			<SortableRepeater field="people" sortBy="order" removeType="delete">
				<Person />
			</SortableRepeater>
		</>
	),
	'FrontPage'
)
