import * as React from 'react'
import {
	ChangePassword,
	Checkbox,
	FormGroup,
	GenericPage,
	InviteUserToProject,
	RolesConfig,
	useAuthedContentQuery,
	UsersManagement,
	Page,
	LayoutInner,
	EditUserInProject,
} from 'cms-admin'

const CHOOSE_SITE_QUERY = `
	query {
		sites: listSite {
			id
			name
		}
	}
`

interface ChooseSiteQueryResult {
	sites: { id: string; name: string }[]
}

const ChooseSite: React.FC<{ value: string[]; onChange: (newValues: string[]) => void }> = ({ value, onChange }) => {
	const { state: query } = useAuthedContentQuery<ChooseSiteQueryResult, {}>(CHOOSE_SITE_QUERY, {})

	if (!query.finished || query.error) {
		return <></>
	}

	return (
		<FormGroup label="Sites">
			{query.data.sites.map(({ id, name }) => (
				<Checkbox
					key={id}
					checked={value.includes(id)}
					onChange={isChecked => {
						if (isChecked) {
							onChange([...value, id])
						} else {
							onChange(value.filter(it => it != id))
						}
					}}
				>
					{name}
				</Checkbox>
			))}
		</FormGroup>
	)
}

const rolesConfig: RolesConfig = {
	regionManager: {
		name: 'Region manager',
		variables: {
			site_id: {
				render: ChooseSite,
			},
		},
	},
}

const joinWithAnd = (items: string[]) => {
	if (items.length === 0) {
		return 'nothing'
	}
	if (items.length === 1) {
		return items[0]
	}
	const withoutLast = items.slice(0, -1).join(', ')
	const last = items[items.length - 1]
	return [withoutLast, last].join(' and ')
}

export const ChangePasswordPage = (
	<GenericPage pageName="tenantChangePassword">
		<ChangePassword />
	</GenericPage>
)
export const UsersManagementPage = (
	<GenericPage pageName="tenantUsers">
		<UsersManagement
			rolesDataQuery={`
					query {
						sites: listSite {
							id
							name
						}
					}
				`}
			roleRenderers={{
				admin: () => <>Administrator</>,
				regionManager: ({ variables, rolesData }) => {
					const sites = variables.site_id || []
					const siteNames = sites.map(siteId => {
						const site: { name: string } | undefined = rolesData.sites.find((it: any) => it.id == siteId)
						return site === undefined ? `unknown site ${siteId}` : site.name
					})
					return <>Region manager for {joinWithAnd(siteNames)}</>
				},
			}}
		/>
	</GenericPage>
)
export const InviteUserPage = (
	<GenericPage pageName="tenantInviteUser">
		<InviteUserToProject rolesConfig={rolesConfig} />
	</GenericPage>
)
export const EditUserPage = (
	<Page<{ tenantEditUser: { id: string } }> name="tenantEditUser">
		{({ id }) => (
			<LayoutInner>
				<EditUserInProject rolesConfig={rolesConfig} identityId={id} />
			</LayoutInner>
		)}
	</Page>
)
