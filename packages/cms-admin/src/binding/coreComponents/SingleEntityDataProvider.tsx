import { GraphQlBuilder } from 'cms-client'
import { Input } from 'cms-common'
import * as React from 'react'
import Dimensions from '../../components/Dimensions'
import { SelectedDimension } from '../../state/request'
import { EntityName, FieldName } from '../bindingTypes'
import { Environment, MarkerTreeRoot } from '../dao'
import { MarkerTreeGenerator } from '../model'
import { DataRendererProps, getDataProvider } from './DataProvider'
import { EnforceSubtypeRelation } from './EnforceSubtypeRelation'
import { EnvironmentContext } from './EnvironmentContext'
import { MarkerTreeRootProvider } from './MarkerProvider'

interface SingleEntityDataProviderProps<DRP> {
	name: EntityName
	associatedField?: FieldName
	where: Input.UniqueWhere<GraphQlBuilder.Literal>
	renderer?: React.ComponentClass<DRP & DataRendererProps>
	rendererProps?: DRP
}

export class SingleEntityDataProvider<DRP> extends React.Component<SingleEntityDataProviderProps<DRP>> {
	public static displayName = 'SingleEntityDataProvider'

	public render() {
		return (
			<Dimensions>
				{(dimensions: SelectedDimension) => {
					const environment = new Environment({ dimensions })
					const markerTreeGenerator = new MarkerTreeGenerator(
						<SingleEntityDataProvider {...this.props}>{this.props.children}</SingleEntityDataProvider>,
						environment
					)
					const DataProvider = getDataProvider<DRP>()

					return (
						<EnvironmentContext.Provider value={environment}>
							<DataProvider
								markerTree={markerTreeGenerator.generate()}
								renderer={this.props.renderer}
								rendererProps={this.props.rendererProps}
							>
								{this.props.children}
							</DataProvider>
						</EnvironmentContext.Provider>
					)
				}}
			</Dimensions>
		)
	}

	public static generateMarkerTreeRoot(
		props: SingleEntityDataProviderProps<unknown>,
		fields: MarkerTreeRoot['fields']
	): MarkerTreeRoot {
		return new MarkerTreeRoot(
			props.name,
			fields,
			{
				where: props.where,
				whereType: 'unique'
			},
			props.associatedField
		)
	}
}

type EnforceDataBindingCompatibility = EnforceSubtypeRelation<
	typeof SingleEntityDataProvider,
	MarkerTreeRootProvider<SingleEntityDataProviderProps<any>>
>