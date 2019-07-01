import { Input } from 'cms-common'
import { GraphQlBuilder } from 'cms-client'
import * as React from 'react'
import { Environment, EnvironmentContext, SingleEntityDataProvider } from 'cms-admin'

interface StandaloneEditProps {
	entityName: string
	where: (env: Environment) => Input.UniqueWhere<GraphQlBuilder.Literal>
	children: React.ReactNode
}

export const StandaloneEdit: React.ComponentType<StandaloneEditProps> = props => (
	<EnvironmentContext.Consumer>
		{environment => (
			<SingleEntityDataProvider where={props.where(environment)} name={props.entityName}>
				{props.children}
			</SingleEntityDataProvider>
		)}
	</EnvironmentContext.Consumer>
)
