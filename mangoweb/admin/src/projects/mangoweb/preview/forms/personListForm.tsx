import { PageLinkById, TextField } from 'cms-admin'
import * as React from 'react'

const personListForm = (
	<>
		<TextField name="shortName" label="ShortName" />
		<PageLinkById change={id => ({ name: 'edit_person', params: { id } })}>Edit</PageLinkById>
	</>
)

export { personListForm }
