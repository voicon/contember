import { H2 } from '@blueprintjs/core'
import { SortableRepeater, TextField } from 'cms-admin'
import * as React from 'react'
import { LocaleSideDimension } from '../components'

export const footerForm = (
	<>
		<H2>Contact us button</H2>
		<LocaleSideDimension>
			<TextField name="$locale.contactButtonText" label="Button text" />
		</LocaleSideDimension>

		<H2>Footer links</H2>
		<SortableRepeater field="buttons" sortBy="order">
			<LocaleSideDimension>
				<TextField name="$locale.label" label="Link text" />
			</LocaleSideDimension>
			<TextField name="url" label="Link url" />
		</SortableRepeater>
	</>
)
