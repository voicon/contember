import { DataContext, DefaultRenderer, EntityAccessor, FeedbackRenderer, LayoutInner, RendererProps } from 'cms-admin'
import * as React from 'react'

export const GenericPageListRenderer = React.memo<RendererProps>(props => (
	<FeedbackRenderer data={props.data}>
		{data => {
			if (!(data.root instanceof EntityAccessor)) {
				return null
			}
			return (
				<DataContext.Provider value={data.root}>
					<LayoutInner>
						{DefaultRenderer.renderTitleBar(props)}
						{props.children}
					</LayoutInner>
				</DataContext.Provider>
			)
		}}
	</FeedbackRenderer>
))
