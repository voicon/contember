import { MultiEditPage, SortableRepeater, TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension, SiteField } from '../components'

export const FaqPage = (
	<MultiEditPage
		entity="FaqCategory"
		pageName="faq"
		where="(site.code = $site)"
		rendererProps={{
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
		<SortableRepeater sortBy={'order'} field={'questions'}>
			<SiteField />
			<LocaleSideDimension>
				<TextField label={'Question'} name="question" />
				<TextField label={'Answer'} name="answer" allowNewlines={true} />
			</LocaleSideDimension>
		</SortableRepeater>
	</MultiEditPage>
)
