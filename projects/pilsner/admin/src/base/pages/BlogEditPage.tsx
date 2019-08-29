import { EditPage } from 'cms-admin'
import * as React from 'react'
import { NavigateBackButton } from '../components'
import { PostForm, PostFormSide } from '../forms'

export const BlogEditPage = (
	<EditPage
		entity="Post"
		pageName={'blogEdit'}
		rendererProps={{
			title: 'Edit story',
			/*actions: ( // This does not work yet.
				<RemoveButton intent="danger" size="small" immediatePersist={true}>
					Delete this story
				</RemoveButton>
			),*/
			navigation: <NavigateBackButton to="blogList">Stories</NavigateBackButton>,
			side: <PostFormSide />,
			onlyOneInCollection: true,
		}}
	>
		<PostForm />
	</EditPage>
)
