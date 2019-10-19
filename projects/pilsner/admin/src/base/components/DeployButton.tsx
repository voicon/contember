import {
	AccessorTreeStateWithDataContext,
	Button,
	Component,
	EntityAccessor,
	FeedbackRenderer,
	Field,
	FieldAccessor,
	FormGroup,
	readEventStream,
	readLines,
	SingleEntityDataProvider,
} from 'cms-admin'
import * as React from 'react'

interface Props {}

interface State {
	deploymentStatus?: { progress: number; state: string; failureReason?: string }
}

const DeployButtonInner = Component<{
	renderButton: (apiConfig: { apiKey: string; apiEndpoint: string }) => React.ReactNode
}>(
	props => {
		const accessorTreeState = React.useContext(AccessorTreeStateWithDataContext)

		if (!accessorTreeState) {
			return null
		}
		const data = accessorTreeState.data.root

		if (!(data instanceof EntityAccessor)) {
			throw new Error()
		}
		const apiKey = (data.data.getField('apiKey') as FieldAccessor).currentValue as string
		const apiEndpoint = (data.data.getField('apiEndpoint') as FieldAccessor).currentValue as string

		return <>{props.renderButton({ apiKey, apiEndpoint })}</>
	},
	() => (
		<>
			<Field name={'apiKey'} />
			<Field name={'apiEndpoint'} />
		</>
	),
	'DeployButtonInner',
)

export class DeployButton extends React.Component<Props, State> {
	state: State = {}

	async handleDeploy(endpoint: string, key: string) {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'X-Api-Key': key,
			},
		})
		const reader = response.body!.getReader()
		const lines = readLines(reader)
		for await (let event of readEventStream(lines)) {
			this.setState({ deploymentStatus: JSON.parse(event.data) })
		}
	}

	renderButton() {
		if (
			this.state.deploymentStatus &&
			this.state.deploymentStatus.state !== 'done' &&
			this.state.deploymentStatus.state !== 'failed'
		) {
			return null
		}
		return (
			// TODO this is broken
			<SingleEntityDataProvider where="(unique = one)" entityName="DeploymentConfig">
				<FeedbackRenderer>
					<DeployButtonInner
						renderButton={({ apiKey, apiEndpoint }) => (
							<Button onClick={() => this.handleDeploy(apiEndpoint, apiKey)}>Deploy</Button>
						)}
					/>
				</FeedbackRenderer>
			</SingleEntityDataProvider>
		)
	}

	renderProgress() {
		if (!this.state.deploymentStatus) {
			return undefined
		}
		return (
			<>
				{Math.round(this.state.deploymentStatus.progress * 100)}% - {this.state.deploymentStatus.state}
				{this.state.deploymentStatus.failureReason && this.state.deploymentStatus.failureReason}
			</>
		)
	}

	render() {
		return (
			<FormGroup label={undefined} description={this.renderProgress()}>
				{this.renderButton()}
			</FormGroup>
		)
	}
}
