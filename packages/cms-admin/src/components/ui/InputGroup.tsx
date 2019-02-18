import * as React from 'react'
import cn from 'classnames'

export interface InputGroupProps {
	large?: boolean
}

export const InputGroup: React.FunctionComponent<
	InputGroupProps & React.InputHTMLAttributes<HTMLInputElement>
> = props => {
	const { large, children, ...rest } = props

	return (
		<div className={cn('inputGroup', large && 'view-large')}>
			<input className="inputGroup-text" {...rest} />
		</div>
	)
}
