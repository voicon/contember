import { EditPage, PageLinkButton, TableRenderer } from 'cms-admin'
import * as React from 'react'
import { GenericPageList } from './GenericPageList'

export const GenericPageListPage = (
	<EditPage
		pageName="pageList"
		entity="Site"
		where="(slug = $site)"
		rendererProps={{ title: 'Pages', actions: <PageLinkButton to="pageCreate">Add a new page</PageLinkButton> }}
	>
		<GenericPageList />
	</EditPage>
)
