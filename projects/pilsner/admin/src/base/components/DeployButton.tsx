import {
	Button,
	Component,
	DataContext,
	EntityAccessor,
	Field,
	FieldAccessor,
	readEventStream,
	readLines,
	RendererProps,
	SingleEntityDataProvider,
	Spinner,
} from 'cms-admin'
import * as React from 'react'

interface Props {}

interface State {
	deploymentStatus?: { progress: number; state: string; failureReason?: string }
}

class DeployRenderer extends React.PureComponent<RendererProps> {
	render() {
		if (!this.props.data) {
			return <Spinner />
		}
		const accessor = this.props.data.root
		if (!(accessor instanceof EntityAccessor)) {
			throw new Error()
		}
		return <DataContext.Provider value={accessor}>{this.props.children}</DataContext.Provider>
	}
}

const DeployButtonInner = Component<{
	renderButton: (apiConfig: { apiKey: string; apiEndpoint: string }) => React.ReactNode
}>(
	props => (
		<DataContext.Consumer>
			{data => {
				if (!(data instanceof EntityAccessor)) {
					throw new Error()
				}
				const apiKey = (data.data.getField('apiKey') as FieldAccessor).currentValue as string
				const apiEndpoint = (data.data.getField('apiEndpoint') as FieldAccessor).currentValue as string

				return props.renderButton({ apiKey, apiEndpoint })
			}}
		</DataContext.Consumer>
	),
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
			<SingleEntityDataProvider
				where="(unique = one)"
				entityName={'DeploymentConfig'}
				renderer={DeployRenderer}
				rendererProps={{}}
			>
				<DeployButtonInner
					renderButton={({ apiKey, apiEndpoint }) => (
						<Button onClick={() => this.handleDeploy(apiEndpoint, apiKey)}>Deploy</Button>
					)}
				/>
			</SingleEntityDataProvider>
		)
	}

	renderProgress() {
		if (!this.state.deploymentStatus) {
			return null
		}
		return (
			<>
				{Math.round(this.state.deploymentStatus.progress * 100)}% - {this.state.deploymentStatus.state}
				{this.state.deploymentStatus.failureReason && <>({this.state.deploymentStatus.failureReason})</>}
			</>
		)
	}

	render() {
		return (
			<>
				{this.renderProgress()}
				{this.renderButton()}
			</>
		)
	}
}
