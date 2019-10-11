import { EditPage, PageLinkButton } from 'cms-admin'
import * as React from 'react'
import { GenericPageList } from './GenericPageList'

// TODO GenericPageListRenderer
export const GenericPageListPage = (
	<EditPage
		pageName="pageList"
		entityName="Site"
		where="(slug = $site)"
		rendererProps={{ title: 'Pages', actions: <PageLinkButton to="pageCreate">Add a new page</PageLinkButton> }}
	>
		<GenericPageList />
	</EditPage>
)
