import { MultiEditPage, SortableRepeater, TextField } from 'cms-admin'
import * as React from 'react'
import { LinkField, LocaleSideDimension, SiteField } from '../components'

export const FaqPage = (
	<MultiEditPage
		entityName="FaqCategory"
		pageName="faq"
		filter="[site.code = $site]" // TODO this probably does not persist well
		rendererProps={{
			removeType: 'delete',
			title: 'FAQs',
			sortable: {
				sortBy: 'order',
			},
		}}
	>
		<SiteField />
		<LocaleSideDimension>
			<TextField label={'Category name'} name="name" />
		</LocaleSideDimension>
		<SortableRepeater sortBy={'order'} field={'questions'} removeType={'delete'}>
			<SiteField />
			<LocaleSideDimension>
				<TextField label={'Question'} name="question" />
				<TextField label={'Answer'} name="answer" allowNewlines={true} />
				<LinkField label={'Link'} name={'link'} />
				<TextField label={'Link caption'} name="linkCaption" />
			</LocaleSideDimension>
		</SortableRepeater>
	</MultiEditPage>
)
