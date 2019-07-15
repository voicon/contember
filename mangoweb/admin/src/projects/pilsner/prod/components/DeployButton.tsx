import * as React from 'react'
import {
	DataContext,
	EntityAccessor,
	Field,
	Literal,
	readEventStream,
	readLines,
	RendererProps,
	SingleEntityDataProvider
} from 'cms-admin'

interface Props {}

interface State {
	deploymentStatus?: { progress: number; state: string; failureReason?: string }
}

class DeployRenderer extends React.PureComponent<RendererProps> {
	render() {
		if (!this.props.data) {
			return <>Loading...</>
		}
		const accessor = this.props.data.root
		if (!(accessor instanceof EntityAccessor)) {
			throw new Error()
		}
		return <DataContext.Provider value={accessor}>{this.props.children}</DataContext.Provider>
	}
}

export class DeployButton extends React.Component<Props, State> {
	state: State = {}

	async handleDeploy(key: string) {
		const response = await fetch('http://localhost:8000/api/v1/deploy', {
			method: 'POST',
			headers: {
				'X-Api-Key': key
			}
		})
		const reader = response.body!.getReader()
		const lines = readLines(reader)
		for await (let event of readEventStream(lines)) {
			this.setState({ deploymentStatus: JSON.parse(event.data) })
		}
	}

	render() {
		if (!this.state.deploymentStatus) {
			return (
				<SingleEntityDataProvider
					where={{ unique: new Literal('one') }}
					name={'DeploymentConfig'}
					renderer={DeployRenderer}
					rendererProps={{}}
				>
					<Field<string> name={'apiKey'}>
						{data =>
							data.data.currentValue && (
								<button onClick={() => this.handleDeploy(data.data.currentValue!)} className={'button'}>
									Deploy
								</button>
							)
						}
					</Field>
				</SingleEntityDataProvider>
			)
		}
		return (
			<>
				{Math.round(this.state.deploymentStatus.progress * 100)}% - {this.state.deploymentStatus.state} (
				{this.state.deploymentStatus.failureReason})
			</>
		)
	}
}
