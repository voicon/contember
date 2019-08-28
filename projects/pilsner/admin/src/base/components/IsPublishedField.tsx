import { Component, ConcealableField, DateFieldInner, Field, FormGroup, useRelativeSingleField } from 'cms-admin'
import * as React from 'react'

const fieldName = 'publishedAt'
const now = new Date()

export const IsPublishedField = Component(
	() => {
		const dateField = useRelativeSingleField<string>(fieldName)

		const renderConcealedValue = React.useCallback(() => {
			const date = dateField.currentValue ? new Date(dateField.currentValue) : now

			return new Intl.DateTimeFormat('en-GB', {
				day: '2-digit',
				month: 'short',
				year: 'numeric',
			}).format(date)
		}, [dateField.currentValue])

		return (
			<FormGroup label="Publish date" labelDescription="You still have to run deploy.">
				<ConcealableField renderConcealedValue={renderConcealedValue} isExtended>
					{({ onFocus, onBlur }) => (
						<Field<string> name={fieldName}>
							{fieldMetadata => (
								<DateFieldInner
									fieldMetadata={fieldMetadata}
									onFocus={onFocus}
									onBlur={onBlur}
									dateFormat="dd MMM yyyy"
								/>
							)}
						</Field>
					)}
				</ConcealableField>
			</FormGroup>
		)
	},
	() => <Field name={fieldName} defaultValue={now.toISOString()} />,
	'IsPublishedField',
)
