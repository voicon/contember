import { FileInput, FormGroup, IFormGroupProps } from '@blueprintjs/core'
import * as React from 'react'
import { FieldName } from '../../bindingTypes'
import { EnforceSubtypeRelation, Field, SyntheticChildrenProvider } from '../../coreComponents'
import { Environment, FieldAccessor } from '../../dao'
import { Parser } from '../../queryLanguage'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux'
import { uploadFile } from '../../../actions/upload'
import { Dispatch } from '../../../actions/types'
import { AnyUpload, UploadStatus } from '../../../state/upload'
import State from '../../../state'
import { assertNever } from 'cms-common'
import { contentType } from 'mime-types'

export interface UploadFieldOwnProps {
	name: FieldName
	label?: IFormGroupProps['label']
	inlineLabel?: boolean
}

export interface UploadFieldDispatchProps {
	onUpload: (id: string, file: File) => void
}

export interface UploadFieldStateProps {
	uploads: { [id: string]: AnyUpload }
}

interface UploadFieldState {
	uploadId?: string
}

class UploadFieldComponent extends React.Component<
	UploadFieldOwnProps & UploadFieldDispatchProps & UploadFieldStateProps,
	UploadFieldState
> {
	static displayName = 'UploadField'

	state: UploadFieldState = {}

	handleStartUpload(files: File[]) {
		const uploadId = Math.random()
			.toString(36)
			.substring(2, 15)
		this.setState({ uploadId })
		this.props.onUpload(uploadId, files[0])
	}

	public render() {
		const upload: AnyUpload | undefined = this.state.uploadId ? this.props.uploads[this.state.uploadId] : undefined

		return (
			<Field name={this.props.name}>
				{(data: FieldAccessor<string>, env): React.ReactNode => {
					if (upload && upload.status === UploadStatus.FINISHED && upload.resultUrl !== data.currentValue) {
						data.onChange && data.onChange(upload.resultUrl)
					}
					return (
						<FormGroup
							label={env.applySystemMiddleware('labelMiddleware', this.props.label)}
							inline={this.props.inlineLabel}
						>
							<Dropzone
								onDrop={async (accepted: File[]) => {
									this.handleStartUpload(accepted)
								}}
								accept="image/*"
								multiple={false}
							>
								{data.currentValue && this.isImage(data.currentValue) ? <img src={data.currentValue} /> : null}
								{upload && upload.thumbnailUrl ? <img src={upload.thumbnailUrl} /> : null}
								{this.renderUploadStatusMessage(upload)}
							</Dropzone>
						</FormGroup>
					)
				}}
			</Field>
		)
	}

	private isImage(filename: string): boolean {
		const contentTypeValue = contentType(filename.substring(filename.lastIndexOf('/') + 1))
		return contentTypeValue !== false && contentTypeValue.startsWith('image/')
	}

	private renderUploadStatusMessage(upload?: AnyUpload) {
		if (!upload) {
			return 'Select a file to upload'
		}
		switch (upload.status) {
			case UploadStatus.PREPARING:
				return `Starting upload of ${upload.name}`
			case UploadStatus.UPLOADING:
				return `Upload of ${upload.name}: ${upload.progress && upload.progress.toFixed()}%`
			case UploadStatus.FAILED:
				return `Upload failed: ${upload.reason}`
			case UploadStatus.FINISHED:
				return `Upload has finished successfully`
			default:
				assertNever(upload)
		}
	}

	public static generateSyntheticChildren(props: UploadFieldOwnProps, environment: Environment): React.ReactNode {
		return Parser.generateWrappedNode(props.name, fieldName => <Field name={fieldName} />, environment)
	}
}

type EnforceDataBindingCompatibility = EnforceSubtypeRelation<
	typeof UploadFieldComponent,
	SyntheticChildrenProvider<UploadFieldOwnProps>
>

const UploadField = connect<UploadFieldStateProps, UploadFieldDispatchProps, UploadFieldOwnProps, State>(
	state => ({
		uploads: state.upload.uploads
	}),
	(dispatch: Dispatch) => ({
		onUpload: (id, file) => dispatch(uploadFile(id, file))
	})
)(UploadFieldComponent)

export { UploadField }