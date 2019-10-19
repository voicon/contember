import { DetailPage, PageLinkButton } from 'cms-admin'
import * as React from 'react'
import { GenericPageList } from './GenericPageList'

// TODO use a DetailPage
export const GenericPageListPage = (
	<DetailPage
		pageName="pageList"
		entityName="Site"
		where="(slug = $site)"
		rendererProps={{ title: 'Pages', actions: <PageLinkButton to="pageCreate">Add a new page</PageLinkButton> }}
	>
		<GenericPageList />
	</DetailPage>
)
