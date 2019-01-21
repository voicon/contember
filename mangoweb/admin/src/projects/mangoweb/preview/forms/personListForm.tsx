import { PageLinkById, TextField } from 'cms-admin'
import * as React from 'react'

const personListForm = (
	<>
		<TextField name="longName" label="Full name" />
		<PageLinkById change={id => ({ name: 'edit_person', params: { id } })}>Edit details</PageLinkById>
	</>
)

export { personListForm }
