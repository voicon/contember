import { ContainerSpinner } from '@contember/ui'
import * as React from 'react'
import { DataRendererProps, DirtinessContext, MutationStateContext } from '../../coreComponents'
import { PersistInfo, PersistInfoPublicProps } from './userFeedback'

export interface FeedbackRendererPublicProps extends DataRendererProps {
	loadingFallback?: React.ReactElement
	userFeedback?: PersistInfoPublicProps
}

export interface FeedbackRendererInternalProps {
	children: (data: Exclude<DataRendererProps['data'], undefined>) => React.ReactNode
}

export interface FeedbackRendererProps extends FeedbackRendererPublicProps, FeedbackRendererInternalProps {}

export const FeedbackRenderer = React.memo((props: FeedbackRendererProps): React.ReactElement | null => {
	const isMutating = React.useContext(MutationStateContext)
	const isDirty = React.useContext(DirtinessContext)
	const data = props.data

	if (!data) {
		if (props.loadingFallback !== undefined) {
			return props.loadingFallback
		}
		return <ContainerSpinner />
	}

	return (
		<>
			{<PersistInfo {...(props.userFeedback || {})} isMutating={isMutating} isDirty={isDirty} />}
			{props.children(data)}
		</>
	)
})
FeedbackRenderer.displayName = 'FeedbackRenderer'
