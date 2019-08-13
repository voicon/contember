import { number, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Spinner } from '../../src'

const stories = storiesOf('Spinner', module)
stories.addDecorator(withKnobs)

stories.add('simple', () => {
	const fontSize = number('Font size', 16, {
		range: true,
		min: 16,
		max: 160,
		step: 1,
	})

	return (
		<div
			style={{
				fontSize: `${fontSize / 16}rem`,
			}}
		>
			<Spinner />
		</div>
	)
})
