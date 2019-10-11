import { EditPage } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton } from 'cms-admin'
import { PostForm, PostFormSide } from '../forms'

export const BlogEditPage = (
	<EditPage
		entityName="Post"
		pageName={'blogEdit'}
		where="(id = $id)"
		rendererProps={{
			title: 'Edit story',
			/*actions: ( // This does not work yet.
				<RemoveButton intent="danger" size="small" immediatePersist={true}>
					Delete this story
				</RemoveButton>
			),*/
			navigation: <NavigateBackButton to="blogList">Stories</NavigateBackButton>,
			side: <PostFormSide />,
		}}
	>
		<PostForm />
	</EditPage>
)
