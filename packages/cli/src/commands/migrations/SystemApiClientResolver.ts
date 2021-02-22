import { interactiveResolveInstanceEnvironmentFromInput } from '../../utils/instance'
import { interactiveResolveApiToken } from '../../utils/tenant'
import { SystemClient } from '../../utils/system'
import { Workspace } from '../../utils/Workspace'
import { Input } from '../../cli'
import { Project } from '../../utils/Project'

export const resolveSystemApiClient = async (
	workspace: Workspace,
	project: Project,
	input: Input<
		{},
		{
			instance?: string
			['remote-project']?: string
		}
	>,
): Promise<SystemClient> => {
	const instance = await interactiveResolveInstanceEnvironmentFromInput(workspace, input.getOption('instance'))
	const apiToken = await interactiveResolveApiToken({ instance })
	const remoteProject = input.getOption('remote-project') || project.name
	return SystemClient.create(instance.baseUrl, remoteProject, apiToken)
}

export const resolveLocalSystemApiClient = async (
	workspace: Workspace,
	project: Project,
	input: Input<
		{},
		{
			instance?: string
		}
	>,
): Promise<SystemClient> => {
	const instance = await interactiveResolveInstanceEnvironmentFromInput(workspace, input.getOption('instance'), true)
	const apiToken = await interactiveResolveApiToken({ instance })
	return SystemClient.create(instance.baseUrl, project.name, apiToken)
}
