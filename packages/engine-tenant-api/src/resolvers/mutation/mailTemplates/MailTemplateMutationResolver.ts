import {
	AddMailTemplateErrorCode,
	AddMailTemplateResponse,
	MailType as SchemaMailType,
	MutationAddProjectMailTemplateArgs,
	MutationRemoveProjectMailTemplateArgs,
	MutationResolvers,
	RemoveMailTemplateErrorCode,
	RemoveMailTemplateResponse,
} from '../../../schema'
import { ResolverContext } from '../../ResolverContext'
import { MailTemplateManager, MailType, PermissionActions, ProjectManager } from '../../../model'
import { createErrorResponse, createProjectNotFoundResponse } from '../../errorUtils'

export class MailTemplateMutationResolver implements MutationResolvers {
	constructor(
		private readonly projectManager: ProjectManager,
		private readonly mailTemplateManager: MailTemplateManager,
	) {}

	async addProjectMailTemplate(
		parent: any,
		{ template: { content, projectSlug, subject, type, useLayout, variant } }: MutationAddProjectMailTemplateArgs,
		context: ResolverContext,
	): Promise<AddMailTemplateResponse> {
		const project = await this.projectManager.getProjectBySlug(projectSlug)
		await context.requireAccess({
			scope: await context.permissionContext.createProjectScope(project),
			action: PermissionActions.MAIL_TEMPLATE_ADD,
			message: 'You are not allowed to add a mail template',
		})
		if (!project) {
			return createProjectNotFoundResponse(AddMailTemplateErrorCode.ProjectNotFound, projectSlug)
		}

		await this.mailTemplateManager.addMailTemplate({
			content,
			projectId: project.id,
			subject,
			useLayout: typeof useLayout === 'boolean' ? useLayout : true,
			variant: variant || '',
			type: this.mapMailType(type),
		})

		return {
			ok: true,
			errors: [],
		}
	}

	async removeProjectMailTemplate(
		parent: any,
		{ templateIdentifier: { projectSlug, type, variant } }: MutationRemoveProjectMailTemplateArgs,
		context: ResolverContext,
	): Promise<RemoveMailTemplateResponse> {
		const project = await this.projectManager.getProjectBySlug(projectSlug)
		await context.requireAccess({
			scope: await context.permissionContext.createProjectScope(project),
			action: PermissionActions.MAIL_TEMPLATE_REMOVE,
			message: 'You are not allowed to remove a mail template',
		})
		if (!project) {
			return createProjectNotFoundResponse(RemoveMailTemplateErrorCode.ProjectNotFound, projectSlug)
		}

		const removed = await this.mailTemplateManager.removeMailTemplate({
			projectId: project.id,
			variant: variant || '',
			type: this.mapMailType(type),
		})
		if (!removed) {
			return createErrorResponse(RemoveMailTemplateErrorCode.TemplateNotFound, 'Mail template not found')
		}

		return {
			ok: true,
			errors: [],
		}
	}

	private mapMailType(type: SchemaMailType): MailType {
		return {
			[SchemaMailType.ExistingUserInvited]: MailType.existingUserInvited,
			[SchemaMailType.NewUserInvited]: MailType.newUserInvited,
			[SchemaMailType.ResetPasswordRequest]: MailType.passwordReset,
		}[type]
	}
}
