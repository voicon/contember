import { PageLinkById, TextField } from 'cms-admin'
import * as React from 'react'


export const whatWeDoOrderForm = (
	<>
		<TextField name="activity" label="Activity" />
		<PageLinkById change={id => ({ name: 'edit_whatWeDo', params: { id } })}>Edit details</PageLinkById>
	</>
)
