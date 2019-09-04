import { Command, UpdateProjectMemberVariablesCommand } from './'
import { Client } from '@contember/database'
import { UpdateProjectMemberErrorCode } from '../../schema'

class UpdateProjectMemberCommand implements Command<UpdateProjectMemberCommand.UpdateProjectMemberResponse> {
	constructor(
		private readonly projectId: string,
		private readonly identityId: string,
		private readonly roles?: readonly string[],
		private readonly variables?: readonly UpdateProjectMemberVariablesCommand.VariableUpdate[],
	) {}

	async execute({ db, bus }: Command.Args): Promise<UpdateProjectMemberCommand.UpdateProjectMemberResponse> {
		const memberWhere = {
			project_id: this.projectId,
			identity_id: this.identityId,
		}
		const result = await db
			.selectBuilder()
			.where(memberWhere)
			.from('project_member')
			.select('id')
			.getResult()

		if (result.length === 0) {
			return new UpdateProjectMemberCommand.UpdateProjectMemberResponseError([UpdateProjectMemberErrorCode.NotMember])
		}

		if (this.roles) {
			await db
				.updateBuilder()
				.table('project_member')
				.values({
					roles: JSON.stringify(this.roles),
				})
				.where(memberWhere)
				.execute()
		}

		if (this.variables) {
			await bus.execute(new UpdateProjectMemberVariablesCommand(this.projectId, this.identityId, this.variables, true))
		}

		return new UpdateProjectMemberCommand.UpdateProjectMemberResponseOk()
	}
}

namespace UpdateProjectMemberCommand {
	export type UpdateProjectMemberResponse = UpdateProjectMemberResponseOk | UpdateProjectMemberResponseError

	export class UpdateProjectMemberResponseOk {
		readonly ok = true

		constructor() {}
	}

	export class UpdateProjectMemberResponseError {
		readonly ok = false

		constructor(public readonly errors: Array<UpdateProjectMemberErrorCode>) {}
	}
}

export { UpdateProjectMemberCommand }
