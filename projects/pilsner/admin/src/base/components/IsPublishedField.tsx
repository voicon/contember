import { Component, ConcealableField, DateFieldInner, Field, FormGroup, useRelativeSingleField } from 'cms-admin'
import * as React from 'react'

const fieldName = 'publishedAt'
const now = new Date().toISOString()

export const IsPublishedField = Component(
	() => {
		const dateField = useRelativeSingleField<string>(fieldName)

		const renderConcealedValue = React.useCallback(() => {
			if (dateField.currentValue === now || dateField.currentValue === null) {
				return <i>now</i>
			}
			const date = new Date(dateField.currentValue)

			return new Intl.DateTimeFormat('en-GB', {
				day: '2-digit',
				month: 'short',
				year: 'numeric',
			}).format(date)
		}, [dateField.currentValue])

		return (
			<FormGroup label="Publish date">
				<ConcealableField renderConcealedValue={renderConcealedValue} isExtended>
					{({ onFocus, onBlur }) => (
						<Field<string> name={fieldName} defaultValue={now}>
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
	() => <Field name={fieldName} defaultValue={now} />,
	'IsPublishedField',
)
