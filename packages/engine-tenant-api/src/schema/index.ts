import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } &
	{ [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	Json: any
}

export type Query = {
	readonly __typename?: 'Query'
	readonly me: Identity
	readonly projects: ReadonlyArray<Project>
	readonly projectBySlug?: Maybe<Project>
	readonly projectMemberships: ReadonlyArray<Membership>
	readonly checkResetPasswordToken: CheckResetPasswordTokenCode
}

export type QueryProjectBySlugArgs = {
	slug: Scalars['String']
}

export type QueryProjectMembershipsArgs = {
	projectSlug: Scalars['String']
	identityId: Scalars['String']
}

export type QueryCheckResetPasswordTokenArgs = {
	requestId: Scalars['String']
	token: Scalars['String']
}

export type Mutation = {
	readonly __typename?: 'Mutation'
	readonly setup?: Maybe<SetupResponse>
	readonly signUp?: Maybe<SignUpResponse>
	readonly signIn?: Maybe<SignInResponse>
	readonly signOut?: Maybe<SignOutResponse>
	readonly changePassword?: Maybe<ChangePasswordResponse>
	readonly initSignInIDP?: Maybe<InitSignInIdpResponse>
	readonly signInIDP?: Maybe<SignInIdpResponse>
	readonly prepareOtp?: Maybe<PrepareOtpResponse>
	readonly confirmOtp?: Maybe<ConfirmOtpResponse>
	readonly disableOtp?: Maybe<DisableOtpResponse>
	readonly createResetPasswordRequest?: Maybe<CreatePasswordResetRequestResponse>
	readonly resetPassword?: Maybe<ResetPasswordResponse>
	readonly invite?: Maybe<InviteResponse>
	readonly unmanagedInvite?: Maybe<InviteResponse>
	readonly addProjectMember?: Maybe<AddProjectMemberResponse>
	readonly removeProjectMember?: Maybe<RemoveProjectMemberResponse>
	readonly updateProjectMember?: Maybe<UpdateProjectMemberResponse>
	readonly createApiKey?: Maybe<CreateApiKeyResponse>
	readonly disableApiKey?: Maybe<DisableApiKeyResponse>
	readonly addProjectMailTemplate?: Maybe<AddMailTemplateResponse>
	readonly removeProjectMailTemplate?: Maybe<RemoveMailTemplateResponse>
}

export type MutationSetupArgs = {
	superadmin: AdminCredentials
}

export type MutationSignUpArgs = {
	email: Scalars['String']
	password: Scalars['String']
}

export type MutationSignInArgs = {
	email: Scalars['String']
	password: Scalars['String']
	expiration?: Maybe<Scalars['Int']>
	otpToken?: Maybe<Scalars['String']>
}

export type MutationSignOutArgs = {
	all?: Maybe<Scalars['Boolean']>
}

export type MutationChangePasswordArgs = {
	personId: Scalars['String']
	password: Scalars['String']
}

export type MutationInitSignInIdpArgs = {
	identityProvider: Scalars['String']
	redirectUrl: Scalars['String']
}

export type MutationSignInIdpArgs = {
	identityProvider: Scalars['String']
	idpResponse: IdpResponseInput
	redirectUrl: Scalars['String']
	sessionData: Scalars['Json']
	expiration?: Maybe<Scalars['Int']>
}

export type MutationPrepareOtpArgs = {
	label?: Maybe<Scalars['String']>
}

export type MutationConfirmOtpArgs = {
	otpToken: Scalars['String']
}

export type MutationCreateResetPasswordRequestArgs = {
	email: Scalars['String']
	options?: Maybe<CreateResetPasswordRequestOptions>
}

export type MutationResetPasswordArgs = {
	token: Scalars['String']
	password: Scalars['String']
}

export type MutationInviteArgs = {
	email: Scalars['String']
	projectSlug: Scalars['String']
	memberships: ReadonlyArray<MembershipInput>
	options?: Maybe<InviteOptions>
}

export type MutationUnmanagedInviteArgs = {
	email: Scalars['String']
	projectSlug: Scalars['String']
	memberships: ReadonlyArray<MembershipInput>
	password: Scalars['String']
}

export type MutationAddProjectMemberArgs = {
	projectSlug: Scalars['String']
	identityId: Scalars['String']
	memberships: ReadonlyArray<MembershipInput>
}

export type MutationRemoveProjectMemberArgs = {
	projectSlug: Scalars['String']
	identityId: Scalars['String']
}

export type MutationUpdateProjectMemberArgs = {
	projectSlug: Scalars['String']
	identityId: Scalars['String']
	memberships: ReadonlyArray<MembershipInput>
}

export type MutationCreateApiKeyArgs = {
	projectSlug: Scalars['String']
	memberships: ReadonlyArray<MembershipInput>
	description: Scalars['String']
}

export type MutationDisableApiKeyArgs = {
	id: Scalars['String']
}

export type MutationAddProjectMailTemplateArgs = {
	template: MailTemplate
}

export type MutationRemoveProjectMailTemplateArgs = {
	templateIdentifier: MailTemplateIdentifier
}

export type AdminCredentials = {
	readonly email: Scalars['String']
	readonly password: Scalars['String']
}

export type SetupResponse = {
	readonly __typename?: 'SetupResponse'
	readonly ok: Scalars['Boolean']
	readonly result?: Maybe<SetupResult>
}

export type SetupResult = {
	readonly __typename?: 'SetupResult'
	readonly superadmin: Person
	readonly loginKey: ApiKeyWithToken
}

export type SignUpResponse = {
	readonly __typename?: 'SignUpResponse'
	readonly ok: Scalars['Boolean']
	/** @deprecated Field no longer supported */
	readonly errors: ReadonlyArray<SignUpError>
	readonly error?: Maybe<SignUpError>
	readonly result?: Maybe<SignUpResult>
}

export type SignUpError = {
	readonly __typename?: 'SignUpError'
	readonly code: SignUpErrorCode
	readonly developerMessage: Scalars['String']
	/** @deprecated Field no longer supported */
	readonly endPersonMessage?: Maybe<Scalars['String']>
}

export enum SignUpErrorCode {
	EmailAlreadyExists = 'EMAIL_ALREADY_EXISTS',
	TooWeak = 'TOO_WEAK',
}

export type SignUpResult = {
	readonly __typename?: 'SignUpResult'
	readonly person: Person
}

export type SignInResponse = {
	readonly __typename?: 'SignInResponse'
	readonly ok: Scalars['Boolean']
	/** @deprecated Field no longer supported */
	readonly errors: ReadonlyArray<SignInError>
	readonly error?: Maybe<SignInError>
	readonly result?: Maybe<SignInResult>
}

export type SignInError = {
	readonly __typename?: 'SignInError'
	readonly code: SignInErrorCode
	readonly developerMessage: Scalars['String']
	/** @deprecated Field no longer supported */
	readonly endUserMessage?: Maybe<Scalars['String']>
}

export enum SignInErrorCode {
	UnknownEmail = 'UNKNOWN_EMAIL',
	InvalidPassword = 'INVALID_PASSWORD',
	OtpRequired = 'OTP_REQUIRED',
	InvalidOtpToken = 'INVALID_OTP_TOKEN',
}

export type SignInResult = {
	readonly __typename?: 'SignInResult'
	readonly token: Scalars['String']
	readonly person: Person
}

export type SignOutResponse = {
	readonly __typename?: 'SignOutResponse'
	readonly ok: Scalars['Boolean']
	/** @deprecated Field no longer supported */
	readonly errors: ReadonlyArray<SignOutError>
	readonly error?: Maybe<SignOutError>
}

export type SignOutError = {
	readonly __typename?: 'SignOutError'
	readonly code: SignOutErrorCode
	readonly developerMessage: Scalars['String']
	/** @deprecated Field no longer supported */
	readonly endUserMessage?: Maybe<Scalars['String']>
}

export enum SignOutErrorCode {
	NotAPerson = 'NOT_A_PERSON',
}

export type ChangePasswordResponse = {
	readonly __typename?: 'ChangePasswordResponse'
	readonly ok: Scalars['Boolean']
	/** @deprecated Field no longer supported */
	readonly errors: ReadonlyArray<ChangePasswordError>
	readonly error?: Maybe<ChangePasswordError>
}

export type ChangePasswordError = {
	readonly __typename?: 'ChangePasswordError'
	readonly code: ChangePasswordErrorCode
	readonly developerMessage: Scalars['String']
	/** @deprecated Field no longer supported */
	readonly endUserMessage?: Maybe<Scalars['String']>
}

export enum ChangePasswordErrorCode {
	PersonNotFound = 'PERSON_NOT_FOUND',
	TooWeak = 'TOO_WEAK',
}

export type InitSignInIdpResponse = {
	readonly __typename?: 'InitSignInIDPResponse'
	readonly ok: Scalars['Boolean']
	/** @deprecated Field no longer supported */
	readonly errors: ReadonlyArray<InitSignInIdpError>
	readonly error?: Maybe<InitSignInIdpError>
	readonly result?: Maybe<InitSignInIdpResult>
}

export type InitSignInIdpResult = {
	readonly __typename?: 'InitSignInIDPResult'
	readonly authUrl: Scalars['String']
	readonly sessionData: Scalars['Json']
}

export type InitSignInIdpError = {
	readonly __typename?: 'InitSignInIDPError'
	readonly code: InitSignInIdpErrorCode
	readonly developerMessage: Scalars['String']
	/** @deprecated Field no longer supported */
	readonly endUserMessage?: Maybe<Scalars['String']>
}

export enum InitSignInIdpErrorCode {
	ProviderNotFound = 'PROVIDER_NOT_FOUND',
}

export type IdpResponseInput = {
	readonly url: Scalars['String']
}

export type SignInIdpResponse = {
	readonly __typename?: 'SignInIDPResponse'
	readonly ok: Scalars['Boolean']
	/** @deprecated Field no longer supported */
	readonly errors: ReadonlyArray<SignInIdpError>
	readonly error?: Maybe<SignInIdpError>
	readonly result?: Maybe<SignInIdpResult>
}

export type SignInIdpError = {
	readonly __typename?: 'SignInIDPError'
	readonly code: SignInIdpErrorCode
	readonly developerMessage: Scalars['String']
	/** @deprecated Field no longer supported */
	readonly endUserMessage?: Maybe<Scalars['String']>
}

export enum SignInIdpErrorCode {
	InvalidIdpResponse = 'INVALID_IDP_RESPONSE',
	IdpValidationFailed = 'IDP_VALIDATION_FAILED',
	PersonNotFound = 'PERSON_NOT_FOUND',
}

export type SignInIdpResult = {
	readonly __typename?: 'SignInIDPResult'
	readonly token: Scalars['String']
	readonly person: Person
}

export type InviteResponse = {
	readonly __typename?: 'InviteResponse'
	readonly ok: Scalars['Boolean']
	/** @deprecated Field no longer supported */
	readonly errors: ReadonlyArray<InviteError>
	readonly error?: Maybe<InviteError>
	readonly result?: Maybe<InviteResult>
}

export type InviteError = {
	readonly __typename?: 'InviteError'
	readonly code: InviteErrorCode
	readonly developerMessage: Scalars['String']
	readonly membershipValidation?: Maybe<ReadonlyArray<MembershipValidationError>>
	/** @deprecated Field no longer supported */
	readonly endUserMessage?: Maybe<Scalars['String']>
}

export enum InviteErrorCode {
	ProjectNotFound = 'PROJECT_NOT_FOUND',
	AlreadyMember = 'ALREADY_MEMBER',
	InvalidMembership = 'INVALID_MEMBERSHIP',
	RoleNotFound = 'ROLE_NOT_FOUND',
	VariableNotFound = 'VARIABLE_NOT_FOUND',
	VariableEmpty = 'VARIABLE_EMPTY',
}

export type InviteResult = {
	readonly __typename?: 'InviteResult'
	readonly person: Person
	readonly isNew: Scalars['Boolean']
}

export type InviteOptions = {
	readonly mailVariant?: Maybe<Scalars['String']>
}

export type AddProjectMemberResponse = {
	readonly __typename?: 'AddProjectMemberResponse'
	readonly ok: Scalars['Boolean']
	readonly errors: ReadonlyArray<AddProjectMemberError>
	readonly error?: Maybe<AddProjectMemberError>
}

export type AddProjectMemberError = {
	readonly __typename?: 'AddProjectMemberError'
	readonly code: AddProjectMemberErrorCode
	readonly membershipValidation?: Maybe<ReadonlyArray<MembershipValidationError>>
	readonly developerMessage: Scalars['String']
	/** @deprecated Field no longer supported */
	readonly endUserMessage?: Maybe<Scalars['String']>
}

export enum AddProjectMemberErrorCode {
	ProjectNotFound = 'PROJECT_NOT_FOUND',
	IdentityNotFound = 'IDENTITY_NOT_FOUND',
	AlreadyMember = 'ALREADY_MEMBER',
	InvalidMembership = 'INVALID_MEMBERSHIP',
	RoleNotFound = 'ROLE_NOT_FOUND',
	VariableEmpty = 'VARIABLE_EMPTY',
	VariableNotFound = 'VARIABLE_NOT_FOUND',
}

export type UpdateProjectMemberResponse = {
	readonly __typename?: 'UpdateProjectMemberResponse'
	readonly ok: Scalars['Boolean']
	/** @deprecated Field no longer supported */
	readonly errors: ReadonlyArray<UpdateProjectMemberError>
	readonly error?: Maybe<UpdateProjectMemberError>
}

export type UpdateProjectMemberError = {
	readonly __typename?: 'UpdateProjectMemberError'
	readonly code: UpdateProjectMemberErrorCode
	readonly developerMessage: Scalars['String']
	readonly membershipValidation?: Maybe<ReadonlyArray<MembershipValidationError>>
	/** @deprecated Field no longer supported */
	readonly endUserMessage?: Maybe<Scalars['String']>
}

export enum UpdateProjectMemberErrorCode {
	ProjectNotFound = 'PROJECT_NOT_FOUND',
	NotMember = 'NOT_MEMBER',
	InvalidMembership = 'INVALID_MEMBERSHIP',
	RoleNotFound = 'ROLE_NOT_FOUND',
	VariableEmpty = 'VARIABLE_EMPTY',
	VariableNotFound = 'VARIABLE_NOT_FOUND',
}

export type RemoveProjectMemberResponse = {
	readonly __typename?: 'RemoveProjectMemberResponse'
	readonly ok: Scalars['Boolean']
	readonly errors: ReadonlyArray<RemoveProjectMemberError>
	readonly error?: Maybe<RemoveProjectMemberError>
}

export type RemoveProjectMemberError = {
	readonly __typename?: 'RemoveProjectMemberError'
	readonly code: RemoveProjectMemberErrorCode
	readonly developerMessage: Scalars['String']
	/** @deprecated Field no longer supported */
	readonly endUserMessage?: Maybe<Scalars['String']>
}

export enum RemoveProjectMemberErrorCode {
	NotMember = 'NOT_MEMBER',
	ProjectNotFound = 'PROJECT_NOT_FOUND',
}

export type CreateApiKeyResponse = {
	readonly __typename?: 'CreateApiKeyResponse'
	readonly ok: Scalars['Boolean']
	/** @deprecated Field no longer supported */
	readonly errors: ReadonlyArray<CreateApiKeyError>
	readonly error?: Maybe<CreateApiKeyError>
	readonly result?: Maybe<CreateApiKeyResult>
}

export type CreateApiKeyError = {
	readonly __typename?: 'CreateApiKeyError'
	readonly code: CreateApiKeyErrorCode
	readonly developerMessage: Scalars['String']
	readonly membershipValidation?: Maybe<ReadonlyArray<MembershipValidationError>>
	/** @deprecated Field no longer supported */
	readonly endUserMessage?: Maybe<Scalars['String']>
}

export enum CreateApiKeyErrorCode {
	ProjectNotFound = 'PROJECT_NOT_FOUND',
	InvalidMembership = 'INVALID_MEMBERSHIP',
	VariableNotFound = 'VARIABLE_NOT_FOUND',
	RoleNotFound = 'ROLE_NOT_FOUND',
	VariableEmpty = 'VARIABLE_EMPTY',
}

export type CreateApiKeyResult = {
	readonly __typename?: 'CreateApiKeyResult'
	readonly apiKey: ApiKeyWithToken
}

export type DisableApiKeyResponse = {
	readonly __typename?: 'DisableApiKeyResponse'
	readonly ok: Scalars['Boolean']
	/** @deprecated Field no longer supported */
	readonly errors: ReadonlyArray<DisableApiKeyError>
	readonly error?: Maybe<DisableApiKeyError>
}

export type DisableApiKeyError = {
	readonly __typename?: 'DisableApiKeyError'
	readonly code: DisableApiKeyErrorCode
	readonly developerMessage: Scalars['String']
	/** @deprecated Field no longer supported */
	readonly endUserMessage?: Maybe<Scalars['String']>
}

export enum DisableApiKeyErrorCode {
	KeyNotFound = 'KEY_NOT_FOUND',
}

export type VariableEntryInput = {
	readonly name: Scalars['String']
	readonly values: ReadonlyArray<Scalars['String']>
}

export type VariableEntry = {
	readonly __typename?: 'VariableEntry'
	readonly name: Scalars['String']
	readonly values: ReadonlyArray<Scalars['String']>
}

export type MembershipInput = {
	readonly role: Scalars['String']
	readonly variables: ReadonlyArray<VariableEntryInput>
}

export type Membership = {
	readonly __typename?: 'Membership'
	readonly role: Scalars['String']
	readonly variables: ReadonlyArray<VariableEntry>
}

export type MembershipValidationError = {
	readonly __typename?: 'MembershipValidationError'
	readonly code: MembershipValidationErrorCode
	readonly role: Scalars['String']
	readonly variable?: Maybe<Scalars['String']>
}

export enum MembershipValidationErrorCode {
	RoleNotFound = 'ROLE_NOT_FOUND',
	VariableNotFound = 'VARIABLE_NOT_FOUND',
	VariableEmpty = 'VARIABLE_EMPTY',
}

export type Person = {
	readonly __typename?: 'Person'
	readonly id: Scalars['String']
	readonly email: Scalars['String']
	readonly identity: Identity
}

export type ApiKey = {
	readonly __typename?: 'ApiKey'
	readonly id: Scalars['String']
	readonly identity: Identity
}

export type ApiKeyWithToken = {
	readonly __typename?: 'ApiKeyWithToken'
	readonly id: Scalars['String']
	readonly token: Scalars['String']
	readonly identity: Identity
}

export type Identity = {
	readonly __typename?: 'Identity'
	readonly id: Scalars['String']
	readonly person?: Maybe<Person>
	readonly apiKey?: Maybe<ApiKey>
	readonly projects: ReadonlyArray<IdentityProjectRelation>
}

export type IdentityProjectRelation = {
	readonly __typename?: 'IdentityProjectRelation'
	readonly project: Project
	readonly memberships: ReadonlyArray<Membership>
}

export type Project = {
	readonly __typename?: 'Project'
	readonly id: Scalars['String']
	readonly name: Scalars['String']
	readonly slug: Scalars['String']
	readonly roles: ReadonlyArray<RoleDefinition>
	readonly members: ReadonlyArray<ProjectIdentityRelation>
}

export type ProjectMembersArgs = {
	memberType?: Maybe<Member_Type>
}

export enum Member_Type {
	ApiKey = 'API_KEY',
	Person = 'PERSON',
}

export type ProjectIdentityRelation = {
	readonly __typename?: 'ProjectIdentityRelation'
	readonly identity: Identity
	readonly memberships: ReadonlyArray<Membership>
}

export type RoleDefinition = {
	readonly __typename?: 'RoleDefinition'
	readonly name: Scalars['String']
	readonly variables: ReadonlyArray<RoleVariableDefinition>
}

export type RoleVariableDefinition = {
	readonly name: Scalars['String']
}

export type RoleEntityVariableDefinition = RoleVariableDefinition & {
	readonly __typename?: 'RoleEntityVariableDefinition'
	readonly name: Scalars['String']
	readonly entityName: Scalars['String']
}

export type PrepareOtpResponse = {
	readonly __typename?: 'PrepareOtpResponse'
	readonly ok: Scalars['Boolean']
	readonly result?: Maybe<PrepareOtpResult>
}

export type PrepareOtpResult = {
	readonly __typename?: 'PrepareOtpResult'
	readonly otpUri: Scalars['String']
	readonly otpSecret: Scalars['String']
}

export type ConfirmOtpResponse = {
	readonly __typename?: 'ConfirmOtpResponse'
	readonly ok: Scalars['Boolean']
	/** @deprecated Field no longer supported */
	readonly errors: ReadonlyArray<ConfirmOtpError>
	readonly error?: Maybe<ConfirmOtpError>
}

export type ConfirmOtpError = {
	readonly __typename?: 'ConfirmOtpError'
	readonly code: ConfirmOtpErrorCode
	readonly developerMessage: Scalars['String']
	/** @deprecated Field no longer supported */
	readonly endUserMessage?: Maybe<Scalars['String']>
}

export enum ConfirmOtpErrorCode {
	InvalidOtpToken = 'INVALID_OTP_TOKEN',
	NotPrepared = 'NOT_PREPARED',
}

export type DisableOtpResponse = {
	readonly __typename?: 'DisableOtpResponse'
	readonly ok: Scalars['Boolean']
	/** @deprecated Field no longer supported */
	readonly errors: ReadonlyArray<DisableOtpError>
	readonly error?: Maybe<DisableOtpError>
}

export type DisableOtpError = {
	readonly __typename?: 'DisableOtpError'
	readonly code: DisableOtpErrorCode
	readonly developerMessage: Scalars['String']
	/** @deprecated Field no longer supported */
	readonly endUserMessage?: Maybe<Scalars['String']>
}

export enum DisableOtpErrorCode {
	OtpNotActive = 'OTP_NOT_ACTIVE',
}

export type MailTemplate = {
	readonly projectSlug: Scalars['String']
	readonly type: MailType
	/** Custom mail variant identifier, e.g. a locale. */
	readonly variant?: Maybe<Scalars['String']>
	readonly subject: Scalars['String']
	readonly content: Scalars['String']
	readonly useLayout?: Maybe<Scalars['Boolean']>
}

export enum MailType {
	ExistingUserInvited = 'EXISTING_USER_INVITED',
	NewUserInvited = 'NEW_USER_INVITED',
	ResetPasswordRequest = 'RESET_PASSWORD_REQUEST',
}

export type MailTemplateIdentifier = {
	readonly projectSlug: Scalars['String']
	readonly type: MailType
	readonly variant?: Maybe<Scalars['String']>
}

export type AddMailTemplateResponse = {
	readonly __typename?: 'AddMailTemplateResponse'
	readonly ok: Scalars['Boolean']
	/** @deprecated Field no longer supported */
	readonly errors: ReadonlyArray<AddMailTemplateError>
	readonly error?: Maybe<AddMailTemplateError>
}

export type AddMailTemplateError = {
	readonly __typename?: 'AddMailTemplateError'
	readonly code: AddMailTemplateErrorCode
	readonly developerMessage: Scalars['String']
	/** @deprecated Field no longer supported */
	readonly endUserMessage?: Maybe<Scalars['String']>
}

export enum AddMailTemplateErrorCode {
	MissingVariable = 'MISSING_VARIABLE',
	ProjectNotFound = 'PROJECT_NOT_FOUND',
}

export type RemoveMailTemplateResponse = {
	readonly __typename?: 'RemoveMailTemplateResponse'
	readonly ok: Scalars['Boolean']
	readonly errors: ReadonlyArray<RemoveMailTemplateError>
	readonly error?: Maybe<RemoveMailTemplateError>
}

export type RemoveMailTemplateError = {
	readonly __typename?: 'RemoveMailTemplateError'
	readonly code: RemoveMailTemplateErrorCode
	readonly developerMessage: Scalars['String']
	/** @deprecated Field no longer supported */
	readonly endUserMessage?: Maybe<Scalars['String']>
}

export enum RemoveMailTemplateErrorCode {
	ProjectNotFound = 'PROJECT_NOT_FOUND',
	TemplateNotFound = 'TEMPLATE_NOT_FOUND',
}

export type CheckResetPasswordTokenResult = {
	readonly __typename?: 'CheckResetPasswordTokenResult'
	readonly code: CheckResetPasswordTokenCode
}

export enum CheckResetPasswordTokenCode {
	RequestNotFound = 'REQUEST_NOT_FOUND',
	TokenNotFound = 'TOKEN_NOT_FOUND',
	TokenUsed = 'TOKEN_USED',
	TokenExpired = 'TOKEN_EXPIRED',
}

export type CreatePasswordResetRequestResponse = {
	readonly __typename?: 'CreatePasswordResetRequestResponse'
	readonly ok: Scalars['Boolean']
	/** @deprecated Field no longer supported */
	readonly errors: ReadonlyArray<CreatePasswordResetRequestError>
	readonly error?: Maybe<CreatePasswordResetRequestError>
}

export type CreatePasswordResetRequestError = {
	readonly __typename?: 'CreatePasswordResetRequestError'
	readonly code: CreatePasswordResetRequestErrorCode
	readonly developerMessage: Scalars['String']
	/** @deprecated Field no longer supported */
	readonly endUserMessage?: Maybe<Scalars['String']>
}

export enum CreatePasswordResetRequestErrorCode {
	PersonNotFound = 'PERSON_NOT_FOUND',
}

export type ResetPasswordResponse = {
	readonly __typename?: 'ResetPasswordResponse'
	readonly ok: Scalars['Boolean']
	/** @deprecated Field no longer supported */
	readonly errors: ReadonlyArray<ResetPasswordError>
	readonly error?: Maybe<ResetPasswordError>
}

export type ResetPasswordError = {
	readonly __typename?: 'ResetPasswordError'
	readonly code: ResetPasswordErrorCode
	readonly developerMessage: Scalars['String']
	/** @deprecated Field no longer supported */
	readonly endUserMessage?: Maybe<Scalars['String']>
}

export enum ResetPasswordErrorCode {
	TokenNotFound = 'TOKEN_NOT_FOUND',
	TokenUsed = 'TOKEN_USED',
	TokenExpired = 'TOKEN_EXPIRED',
	PasswordTooWeak = 'PASSWORD_TOO_WEAK',
}

export type CreateResetPasswordRequestOptions = {
	readonly mailProject?: Maybe<Scalars['String']>
	readonly mailVariant?: Maybe<Scalars['String']>
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
	fragment: string
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
	selectionSet: string
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
	| LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
	| NewStitchingResolver<TResult, TParent, TContext, TArgs>
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| StitchingResolver<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
	resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
	| ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	Json: ResolverTypeWrapper<Scalars['Json']>
	Query: ResolverTypeWrapper<{}>
	String: ResolverTypeWrapper<Scalars['String']>
	Mutation: ResolverTypeWrapper<{}>
	Int: ResolverTypeWrapper<Scalars['Int']>
	Boolean: ResolverTypeWrapper<Scalars['Boolean']>
	AdminCredentials: AdminCredentials
	SetupResponse: ResolverTypeWrapper<SetupResponse>
	SetupResult: ResolverTypeWrapper<SetupResult>
	SignUpResponse: ResolverTypeWrapper<SignUpResponse>
	SignUpError: ResolverTypeWrapper<SignUpError>
	SignUpErrorCode: SignUpErrorCode
	SignUpResult: ResolverTypeWrapper<SignUpResult>
	SignInResponse: ResolverTypeWrapper<SignInResponse>
	SignInError: ResolverTypeWrapper<SignInError>
	SignInErrorCode: SignInErrorCode
	SignInResult: ResolverTypeWrapper<SignInResult>
	SignOutResponse: ResolverTypeWrapper<SignOutResponse>
	SignOutError: ResolverTypeWrapper<SignOutError>
	SignOutErrorCode: SignOutErrorCode
	ChangePasswordResponse: ResolverTypeWrapper<ChangePasswordResponse>
	ChangePasswordError: ResolverTypeWrapper<ChangePasswordError>
	ChangePasswordErrorCode: ChangePasswordErrorCode
	InitSignInIDPResponse: ResolverTypeWrapper<InitSignInIdpResponse>
	InitSignInIDPResult: ResolverTypeWrapper<InitSignInIdpResult>
	InitSignInIDPError: ResolverTypeWrapper<InitSignInIdpError>
	InitSignInIDPErrorCode: InitSignInIdpErrorCode
	IDPResponseInput: IdpResponseInput
	SignInIDPResponse: ResolverTypeWrapper<SignInIdpResponse>
	SignInIDPError: ResolverTypeWrapper<SignInIdpError>
	SignInIDPErrorCode: SignInIdpErrorCode
	SignInIDPResult: ResolverTypeWrapper<SignInIdpResult>
	InviteResponse: ResolverTypeWrapper<InviteResponse>
	InviteError: ResolverTypeWrapper<InviteError>
	InviteErrorCode: InviteErrorCode
	InviteResult: ResolverTypeWrapper<InviteResult>
	InviteOptions: InviteOptions
	AddProjectMemberResponse: ResolverTypeWrapper<AddProjectMemberResponse>
	AddProjectMemberError: ResolverTypeWrapper<AddProjectMemberError>
	AddProjectMemberErrorCode: AddProjectMemberErrorCode
	UpdateProjectMemberResponse: ResolverTypeWrapper<UpdateProjectMemberResponse>
	UpdateProjectMemberError: ResolverTypeWrapper<UpdateProjectMemberError>
	UpdateProjectMemberErrorCode: UpdateProjectMemberErrorCode
	RemoveProjectMemberResponse: ResolverTypeWrapper<RemoveProjectMemberResponse>
	RemoveProjectMemberError: ResolverTypeWrapper<RemoveProjectMemberError>
	RemoveProjectMemberErrorCode: RemoveProjectMemberErrorCode
	CreateApiKeyResponse: ResolverTypeWrapper<CreateApiKeyResponse>
	CreateApiKeyError: ResolverTypeWrapper<CreateApiKeyError>
	CreateApiKeyErrorCode: CreateApiKeyErrorCode
	CreateApiKeyResult: ResolverTypeWrapper<CreateApiKeyResult>
	DisableApiKeyResponse: ResolverTypeWrapper<DisableApiKeyResponse>
	DisableApiKeyError: ResolverTypeWrapper<DisableApiKeyError>
	DisableApiKeyErrorCode: DisableApiKeyErrorCode
	VariableEntryInput: VariableEntryInput
	VariableEntry: ResolverTypeWrapper<VariableEntry>
	MembershipInput: MembershipInput
	Membership: ResolverTypeWrapper<Membership>
	MembershipValidationError: ResolverTypeWrapper<MembershipValidationError>
	MembershipValidationErrorCode: MembershipValidationErrorCode
	Person: ResolverTypeWrapper<Person>
	ApiKey: ResolverTypeWrapper<ApiKey>
	ApiKeyWithToken: ResolverTypeWrapper<ApiKeyWithToken>
	Identity: ResolverTypeWrapper<Identity>
	IdentityProjectRelation: ResolverTypeWrapper<IdentityProjectRelation>
	Project: ResolverTypeWrapper<Project>
	MEMBER_TYPE: Member_Type
	ProjectIdentityRelation: ResolverTypeWrapper<ProjectIdentityRelation>
	RoleDefinition: ResolverTypeWrapper<RoleDefinition>
	RoleVariableDefinition: ResolversTypes['RoleEntityVariableDefinition']
	RoleEntityVariableDefinition: ResolverTypeWrapper<RoleEntityVariableDefinition>
	PrepareOtpResponse: ResolverTypeWrapper<PrepareOtpResponse>
	PrepareOtpResult: ResolverTypeWrapper<PrepareOtpResult>
	ConfirmOtpResponse: ResolverTypeWrapper<ConfirmOtpResponse>
	ConfirmOtpError: ResolverTypeWrapper<ConfirmOtpError>
	ConfirmOtpErrorCode: ConfirmOtpErrorCode
	DisableOtpResponse: ResolverTypeWrapper<DisableOtpResponse>
	DisableOtpError: ResolverTypeWrapper<DisableOtpError>
	DisableOtpErrorCode: DisableOtpErrorCode
	MailTemplate: MailTemplate
	MailType: MailType
	MailTemplateIdentifier: MailTemplateIdentifier
	AddMailTemplateResponse: ResolverTypeWrapper<AddMailTemplateResponse>
	AddMailTemplateError: ResolverTypeWrapper<AddMailTemplateError>
	AddMailTemplateErrorCode: AddMailTemplateErrorCode
	RemoveMailTemplateResponse: ResolverTypeWrapper<RemoveMailTemplateResponse>
	RemoveMailTemplateError: ResolverTypeWrapper<RemoveMailTemplateError>
	RemoveMailTemplateErrorCode: RemoveMailTemplateErrorCode
	CheckResetPasswordTokenResult: ResolverTypeWrapper<CheckResetPasswordTokenResult>
	CheckResetPasswordTokenCode: CheckResetPasswordTokenCode
	CreatePasswordResetRequestResponse: ResolverTypeWrapper<CreatePasswordResetRequestResponse>
	CreatePasswordResetRequestError: ResolverTypeWrapper<CreatePasswordResetRequestError>
	CreatePasswordResetRequestErrorCode: CreatePasswordResetRequestErrorCode
	ResetPasswordResponse: ResolverTypeWrapper<ResetPasswordResponse>
	ResetPasswordError: ResolverTypeWrapper<ResetPasswordError>
	ResetPasswordErrorCode: ResetPasswordErrorCode
	CreateResetPasswordRequestOptions: CreateResetPasswordRequestOptions
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	Json: Scalars['Json']
	Query: {}
	String: Scalars['String']
	Mutation: {}
	Int: Scalars['Int']
	Boolean: Scalars['Boolean']
	AdminCredentials: AdminCredentials
	SetupResponse: SetupResponse
	SetupResult: SetupResult
	SignUpResponse: SignUpResponse
	SignUpError: SignUpError
	SignUpResult: SignUpResult
	SignInResponse: SignInResponse
	SignInError: SignInError
	SignInResult: SignInResult
	SignOutResponse: SignOutResponse
	SignOutError: SignOutError
	ChangePasswordResponse: ChangePasswordResponse
	ChangePasswordError: ChangePasswordError
	InitSignInIDPResponse: InitSignInIdpResponse
	InitSignInIDPResult: InitSignInIdpResult
	InitSignInIDPError: InitSignInIdpError
	IDPResponseInput: IdpResponseInput
	SignInIDPResponse: SignInIdpResponse
	SignInIDPError: SignInIdpError
	SignInIDPResult: SignInIdpResult
	InviteResponse: InviteResponse
	InviteError: InviteError
	InviteResult: InviteResult
	InviteOptions: InviteOptions
	AddProjectMemberResponse: AddProjectMemberResponse
	AddProjectMemberError: AddProjectMemberError
	UpdateProjectMemberResponse: UpdateProjectMemberResponse
	UpdateProjectMemberError: UpdateProjectMemberError
	RemoveProjectMemberResponse: RemoveProjectMemberResponse
	RemoveProjectMemberError: RemoveProjectMemberError
	CreateApiKeyResponse: CreateApiKeyResponse
	CreateApiKeyError: CreateApiKeyError
	CreateApiKeyResult: CreateApiKeyResult
	DisableApiKeyResponse: DisableApiKeyResponse
	DisableApiKeyError: DisableApiKeyError
	VariableEntryInput: VariableEntryInput
	VariableEntry: VariableEntry
	MembershipInput: MembershipInput
	Membership: Membership
	MembershipValidationError: MembershipValidationError
	Person: Person
	ApiKey: ApiKey
	ApiKeyWithToken: ApiKeyWithToken
	Identity: Identity
	IdentityProjectRelation: IdentityProjectRelation
	Project: Project
	ProjectIdentityRelation: ProjectIdentityRelation
	RoleDefinition: RoleDefinition
	RoleVariableDefinition: ResolversParentTypes['RoleEntityVariableDefinition']
	RoleEntityVariableDefinition: RoleEntityVariableDefinition
	PrepareOtpResponse: PrepareOtpResponse
	PrepareOtpResult: PrepareOtpResult
	ConfirmOtpResponse: ConfirmOtpResponse
	ConfirmOtpError: ConfirmOtpError
	DisableOtpResponse: DisableOtpResponse
	DisableOtpError: DisableOtpError
	MailTemplate: MailTemplate
	MailTemplateIdentifier: MailTemplateIdentifier
	AddMailTemplateResponse: AddMailTemplateResponse
	AddMailTemplateError: AddMailTemplateError
	RemoveMailTemplateResponse: RemoveMailTemplateResponse
	RemoveMailTemplateError: RemoveMailTemplateError
	CheckResetPasswordTokenResult: CheckResetPasswordTokenResult
	CreatePasswordResetRequestResponse: CreatePasswordResetRequestResponse
	CreatePasswordResetRequestError: CreatePasswordResetRequestError
	ResetPasswordResponse: ResetPasswordResponse
	ResetPasswordError: ResetPasswordError
	CreateResetPasswordRequestOptions: CreateResetPasswordRequestOptions
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Json'], any> {
	name: 'Json'
}

export type QueryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
	me?: Resolver<ResolversTypes['Identity'], ParentType, ContextType>
	projects?: Resolver<ReadonlyArray<ResolversTypes['Project']>, ParentType, ContextType>
	projectBySlug?: Resolver<
		Maybe<ResolversTypes['Project']>,
		ParentType,
		ContextType,
		RequireFields<QueryProjectBySlugArgs, 'slug'>
	>
	projectMemberships?: Resolver<
		ReadonlyArray<ResolversTypes['Membership']>,
		ParentType,
		ContextType,
		RequireFields<QueryProjectMembershipsArgs, 'projectSlug' | 'identityId'>
	>
	checkResetPasswordToken?: Resolver<
		ResolversTypes['CheckResetPasswordTokenCode'],
		ParentType,
		ContextType,
		RequireFields<QueryCheckResetPasswordTokenArgs, 'requestId' | 'token'>
	>
}

export type MutationResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
	setup?: Resolver<
		Maybe<ResolversTypes['SetupResponse']>,
		ParentType,
		ContextType,
		RequireFields<MutationSetupArgs, 'superadmin'>
	>
	signUp?: Resolver<
		Maybe<ResolversTypes['SignUpResponse']>,
		ParentType,
		ContextType,
		RequireFields<MutationSignUpArgs, 'email' | 'password'>
	>
	signIn?: Resolver<
		Maybe<ResolversTypes['SignInResponse']>,
		ParentType,
		ContextType,
		RequireFields<MutationSignInArgs, 'email' | 'password'>
	>
	signOut?: Resolver<
		Maybe<ResolversTypes['SignOutResponse']>,
		ParentType,
		ContextType,
		RequireFields<MutationSignOutArgs, never>
	>
	changePassword?: Resolver<
		Maybe<ResolversTypes['ChangePasswordResponse']>,
		ParentType,
		ContextType,
		RequireFields<MutationChangePasswordArgs, 'personId' | 'password'>
	>
	initSignInIDP?: Resolver<
		Maybe<ResolversTypes['InitSignInIDPResponse']>,
		ParentType,
		ContextType,
		RequireFields<MutationInitSignInIdpArgs, 'identityProvider' | 'redirectUrl'>
	>
	signInIDP?: Resolver<
		Maybe<ResolversTypes['SignInIDPResponse']>,
		ParentType,
		ContextType,
		RequireFields<MutationSignInIdpArgs, 'identityProvider' | 'idpResponse' | 'redirectUrl' | 'sessionData'>
	>
	prepareOtp?: Resolver<
		Maybe<ResolversTypes['PrepareOtpResponse']>,
		ParentType,
		ContextType,
		RequireFields<MutationPrepareOtpArgs, never>
	>
	confirmOtp?: Resolver<
		Maybe<ResolversTypes['ConfirmOtpResponse']>,
		ParentType,
		ContextType,
		RequireFields<MutationConfirmOtpArgs, 'otpToken'>
	>
	disableOtp?: Resolver<Maybe<ResolversTypes['DisableOtpResponse']>, ParentType, ContextType>
	createResetPasswordRequest?: Resolver<
		Maybe<ResolversTypes['CreatePasswordResetRequestResponse']>,
		ParentType,
		ContextType,
		RequireFields<MutationCreateResetPasswordRequestArgs, 'email'>
	>
	resetPassword?: Resolver<
		Maybe<ResolversTypes['ResetPasswordResponse']>,
		ParentType,
		ContextType,
		RequireFields<MutationResetPasswordArgs, 'token' | 'password'>
	>
	invite?: Resolver<
		Maybe<ResolversTypes['InviteResponse']>,
		ParentType,
		ContextType,
		RequireFields<MutationInviteArgs, 'email' | 'projectSlug' | 'memberships'>
	>
	unmanagedInvite?: Resolver<
		Maybe<ResolversTypes['InviteResponse']>,
		ParentType,
		ContextType,
		RequireFields<MutationUnmanagedInviteArgs, 'email' | 'projectSlug' | 'memberships' | 'password'>
	>
	addProjectMember?: Resolver<
		Maybe<ResolversTypes['AddProjectMemberResponse']>,
		ParentType,
		ContextType,
		RequireFields<MutationAddProjectMemberArgs, 'projectSlug' | 'identityId' | 'memberships'>
	>
	removeProjectMember?: Resolver<
		Maybe<ResolversTypes['RemoveProjectMemberResponse']>,
		ParentType,
		ContextType,
		RequireFields<MutationRemoveProjectMemberArgs, 'projectSlug' | 'identityId'>
	>
	updateProjectMember?: Resolver<
		Maybe<ResolversTypes['UpdateProjectMemberResponse']>,
		ParentType,
		ContextType,
		RequireFields<MutationUpdateProjectMemberArgs, 'projectSlug' | 'identityId' | 'memberships'>
	>
	createApiKey?: Resolver<
		Maybe<ResolversTypes['CreateApiKeyResponse']>,
		ParentType,
		ContextType,
		RequireFields<MutationCreateApiKeyArgs, 'projectSlug' | 'memberships' | 'description'>
	>
	disableApiKey?: Resolver<
		Maybe<ResolversTypes['DisableApiKeyResponse']>,
		ParentType,
		ContextType,
		RequireFields<MutationDisableApiKeyArgs, 'id'>
	>
	addProjectMailTemplate?: Resolver<
		Maybe<ResolversTypes['AddMailTemplateResponse']>,
		ParentType,
		ContextType,
		RequireFields<MutationAddProjectMailTemplateArgs, 'template'>
	>
	removeProjectMailTemplate?: Resolver<
		Maybe<ResolversTypes['RemoveMailTemplateResponse']>,
		ParentType,
		ContextType,
		RequireFields<MutationRemoveProjectMailTemplateArgs, 'templateIdentifier'>
	>
}

export type SetupResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['SetupResponse'] = ResolversParentTypes['SetupResponse']
> = {
	ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	result?: Resolver<Maybe<ResolversTypes['SetupResult']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SetupResultResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['SetupResult'] = ResolversParentTypes['SetupResult']
> = {
	superadmin?: Resolver<ResolversTypes['Person'], ParentType, ContextType>
	loginKey?: Resolver<ResolversTypes['ApiKeyWithToken'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SignUpResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['SignUpResponse'] = ResolversParentTypes['SignUpResponse']
> = {
	ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	errors?: Resolver<ReadonlyArray<ResolversTypes['SignUpError']>, ParentType, ContextType>
	error?: Resolver<Maybe<ResolversTypes['SignUpError']>, ParentType, ContextType>
	result?: Resolver<Maybe<ResolversTypes['SignUpResult']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SignUpErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['SignUpError'] = ResolversParentTypes['SignUpError']
> = {
	code?: Resolver<ResolversTypes['SignUpErrorCode'], ParentType, ContextType>
	developerMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	endPersonMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SignUpResultResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['SignUpResult'] = ResolversParentTypes['SignUpResult']
> = {
	person?: Resolver<ResolversTypes['Person'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SignInResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['SignInResponse'] = ResolversParentTypes['SignInResponse']
> = {
	ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	errors?: Resolver<ReadonlyArray<ResolversTypes['SignInError']>, ParentType, ContextType>
	error?: Resolver<Maybe<ResolversTypes['SignInError']>, ParentType, ContextType>
	result?: Resolver<Maybe<ResolversTypes['SignInResult']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SignInErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['SignInError'] = ResolversParentTypes['SignInError']
> = {
	code?: Resolver<ResolversTypes['SignInErrorCode'], ParentType, ContextType>
	developerMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	endUserMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SignInResultResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['SignInResult'] = ResolversParentTypes['SignInResult']
> = {
	token?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	person?: Resolver<ResolversTypes['Person'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SignOutResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['SignOutResponse'] = ResolversParentTypes['SignOutResponse']
> = {
	ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	errors?: Resolver<ReadonlyArray<ResolversTypes['SignOutError']>, ParentType, ContextType>
	error?: Resolver<Maybe<ResolversTypes['SignOutError']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SignOutErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['SignOutError'] = ResolversParentTypes['SignOutError']
> = {
	code?: Resolver<ResolversTypes['SignOutErrorCode'], ParentType, ContextType>
	developerMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	endUserMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ChangePasswordResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['ChangePasswordResponse'] = ResolversParentTypes['ChangePasswordResponse']
> = {
	ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	errors?: Resolver<ReadonlyArray<ResolversTypes['ChangePasswordError']>, ParentType, ContextType>
	error?: Resolver<Maybe<ResolversTypes['ChangePasswordError']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ChangePasswordErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['ChangePasswordError'] = ResolversParentTypes['ChangePasswordError']
> = {
	code?: Resolver<ResolversTypes['ChangePasswordErrorCode'], ParentType, ContextType>
	developerMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	endUserMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type InitSignInIdpResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['InitSignInIDPResponse'] = ResolversParentTypes['InitSignInIDPResponse']
> = {
	ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	errors?: Resolver<ReadonlyArray<ResolversTypes['InitSignInIDPError']>, ParentType, ContextType>
	error?: Resolver<Maybe<ResolversTypes['InitSignInIDPError']>, ParentType, ContextType>
	result?: Resolver<Maybe<ResolversTypes['InitSignInIDPResult']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type InitSignInIdpResultResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['InitSignInIDPResult'] = ResolversParentTypes['InitSignInIDPResult']
> = {
	authUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	sessionData?: Resolver<ResolversTypes['Json'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type InitSignInIdpErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['InitSignInIDPError'] = ResolversParentTypes['InitSignInIDPError']
> = {
	code?: Resolver<ResolversTypes['InitSignInIDPErrorCode'], ParentType, ContextType>
	developerMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	endUserMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SignInIdpResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['SignInIDPResponse'] = ResolversParentTypes['SignInIDPResponse']
> = {
	ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	errors?: Resolver<ReadonlyArray<ResolversTypes['SignInIDPError']>, ParentType, ContextType>
	error?: Resolver<Maybe<ResolversTypes['SignInIDPError']>, ParentType, ContextType>
	result?: Resolver<Maybe<ResolversTypes['SignInIDPResult']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SignInIdpErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['SignInIDPError'] = ResolversParentTypes['SignInIDPError']
> = {
	code?: Resolver<ResolversTypes['SignInIDPErrorCode'], ParentType, ContextType>
	developerMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	endUserMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SignInIdpResultResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['SignInIDPResult'] = ResolversParentTypes['SignInIDPResult']
> = {
	token?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	person?: Resolver<ResolversTypes['Person'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type InviteResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['InviteResponse'] = ResolversParentTypes['InviteResponse']
> = {
	ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	errors?: Resolver<ReadonlyArray<ResolversTypes['InviteError']>, ParentType, ContextType>
	error?: Resolver<Maybe<ResolversTypes['InviteError']>, ParentType, ContextType>
	result?: Resolver<Maybe<ResolversTypes['InviteResult']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type InviteErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['InviteError'] = ResolversParentTypes['InviteError']
> = {
	code?: Resolver<ResolversTypes['InviteErrorCode'], ParentType, ContextType>
	developerMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	membershipValidation?: Resolver<
		Maybe<ReadonlyArray<ResolversTypes['MembershipValidationError']>>,
		ParentType,
		ContextType
	>
	endUserMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type InviteResultResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['InviteResult'] = ResolversParentTypes['InviteResult']
> = {
	person?: Resolver<ResolversTypes['Person'], ParentType, ContextType>
	isNew?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AddProjectMemberResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['AddProjectMemberResponse'] = ResolversParentTypes['AddProjectMemberResponse']
> = {
	ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	errors?: Resolver<ReadonlyArray<ResolversTypes['AddProjectMemberError']>, ParentType, ContextType>
	error?: Resolver<Maybe<ResolversTypes['AddProjectMemberError']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AddProjectMemberErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['AddProjectMemberError'] = ResolversParentTypes['AddProjectMemberError']
> = {
	code?: Resolver<ResolversTypes['AddProjectMemberErrorCode'], ParentType, ContextType>
	membershipValidation?: Resolver<
		Maybe<ReadonlyArray<ResolversTypes['MembershipValidationError']>>,
		ParentType,
		ContextType
	>
	developerMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	endUserMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UpdateProjectMemberResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['UpdateProjectMemberResponse'] = ResolversParentTypes['UpdateProjectMemberResponse']
> = {
	ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	errors?: Resolver<ReadonlyArray<ResolversTypes['UpdateProjectMemberError']>, ParentType, ContextType>
	error?: Resolver<Maybe<ResolversTypes['UpdateProjectMemberError']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UpdateProjectMemberErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['UpdateProjectMemberError'] = ResolversParentTypes['UpdateProjectMemberError']
> = {
	code?: Resolver<ResolversTypes['UpdateProjectMemberErrorCode'], ParentType, ContextType>
	developerMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	membershipValidation?: Resolver<
		Maybe<ReadonlyArray<ResolversTypes['MembershipValidationError']>>,
		ParentType,
		ContextType
	>
	endUserMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type RemoveProjectMemberResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['RemoveProjectMemberResponse'] = ResolversParentTypes['RemoveProjectMemberResponse']
> = {
	ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	errors?: Resolver<ReadonlyArray<ResolversTypes['RemoveProjectMemberError']>, ParentType, ContextType>
	error?: Resolver<Maybe<ResolversTypes['RemoveProjectMemberError']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type RemoveProjectMemberErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['RemoveProjectMemberError'] = ResolversParentTypes['RemoveProjectMemberError']
> = {
	code?: Resolver<ResolversTypes['RemoveProjectMemberErrorCode'], ParentType, ContextType>
	developerMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	endUserMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CreateApiKeyResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CreateApiKeyResponse'] = ResolversParentTypes['CreateApiKeyResponse']
> = {
	ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	errors?: Resolver<ReadonlyArray<ResolversTypes['CreateApiKeyError']>, ParentType, ContextType>
	error?: Resolver<Maybe<ResolversTypes['CreateApiKeyError']>, ParentType, ContextType>
	result?: Resolver<Maybe<ResolversTypes['CreateApiKeyResult']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CreateApiKeyErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CreateApiKeyError'] = ResolversParentTypes['CreateApiKeyError']
> = {
	code?: Resolver<ResolversTypes['CreateApiKeyErrorCode'], ParentType, ContextType>
	developerMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	membershipValidation?: Resolver<
		Maybe<ReadonlyArray<ResolversTypes['MembershipValidationError']>>,
		ParentType,
		ContextType
	>
	endUserMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CreateApiKeyResultResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CreateApiKeyResult'] = ResolversParentTypes['CreateApiKeyResult']
> = {
	apiKey?: Resolver<ResolversTypes['ApiKeyWithToken'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type DisableApiKeyResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['DisableApiKeyResponse'] = ResolversParentTypes['DisableApiKeyResponse']
> = {
	ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	errors?: Resolver<ReadonlyArray<ResolversTypes['DisableApiKeyError']>, ParentType, ContextType>
	error?: Resolver<Maybe<ResolversTypes['DisableApiKeyError']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type DisableApiKeyErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['DisableApiKeyError'] = ResolversParentTypes['DisableApiKeyError']
> = {
	code?: Resolver<ResolversTypes['DisableApiKeyErrorCode'], ParentType, ContextType>
	developerMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	endUserMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type VariableEntryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['VariableEntry'] = ResolversParentTypes['VariableEntry']
> = {
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	values?: Resolver<ReadonlyArray<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MembershipResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Membership'] = ResolversParentTypes['Membership']
> = {
	role?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	variables?: Resolver<ReadonlyArray<ResolversTypes['VariableEntry']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MembershipValidationErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['MembershipValidationError'] = ResolversParentTypes['MembershipValidationError']
> = {
	code?: Resolver<ResolversTypes['MembershipValidationErrorCode'], ParentType, ContextType>
	role?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	variable?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type PersonResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']
> = {
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	identity?: Resolver<ResolversTypes['Identity'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ApiKeyResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['ApiKey'] = ResolversParentTypes['ApiKey']
> = {
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	identity?: Resolver<ResolversTypes['Identity'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ApiKeyWithTokenResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['ApiKeyWithToken'] = ResolversParentTypes['ApiKeyWithToken']
> = {
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	token?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	identity?: Resolver<ResolversTypes['Identity'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type IdentityResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Identity'] = ResolversParentTypes['Identity']
> = {
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>
	apiKey?: Resolver<Maybe<ResolversTypes['ApiKey']>, ParentType, ContextType>
	projects?: Resolver<ReadonlyArray<ResolversTypes['IdentityProjectRelation']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type IdentityProjectRelationResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['IdentityProjectRelation'] = ResolversParentTypes['IdentityProjectRelation']
> = {
	project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>
	memberships?: Resolver<ReadonlyArray<ResolversTypes['Membership']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ProjectResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']
> = {
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	roles?: Resolver<ReadonlyArray<ResolversTypes['RoleDefinition']>, ParentType, ContextType>
	members?: Resolver<
		ReadonlyArray<ResolversTypes['ProjectIdentityRelation']>,
		ParentType,
		ContextType,
		RequireFields<ProjectMembersArgs, never>
	>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ProjectIdentityRelationResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['ProjectIdentityRelation'] = ResolversParentTypes['ProjectIdentityRelation']
> = {
	identity?: Resolver<ResolversTypes['Identity'], ParentType, ContextType>
	memberships?: Resolver<ReadonlyArray<ResolversTypes['Membership']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type RoleDefinitionResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['RoleDefinition'] = ResolversParentTypes['RoleDefinition']
> = {
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	variables?: Resolver<ReadonlyArray<ResolversTypes['RoleVariableDefinition']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type RoleVariableDefinitionResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['RoleVariableDefinition'] = ResolversParentTypes['RoleVariableDefinition']
> = {
	__resolveType: TypeResolveFn<'RoleEntityVariableDefinition', ParentType, ContextType>
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}

export type RoleEntityVariableDefinitionResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['RoleEntityVariableDefinition'] = ResolversParentTypes['RoleEntityVariableDefinition']
> = {
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	entityName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type PrepareOtpResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['PrepareOtpResponse'] = ResolversParentTypes['PrepareOtpResponse']
> = {
	ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	result?: Resolver<Maybe<ResolversTypes['PrepareOtpResult']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type PrepareOtpResultResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['PrepareOtpResult'] = ResolversParentTypes['PrepareOtpResult']
> = {
	otpUri?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	otpSecret?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ConfirmOtpResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['ConfirmOtpResponse'] = ResolversParentTypes['ConfirmOtpResponse']
> = {
	ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	errors?: Resolver<ReadonlyArray<ResolversTypes['ConfirmOtpError']>, ParentType, ContextType>
	error?: Resolver<Maybe<ResolversTypes['ConfirmOtpError']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ConfirmOtpErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['ConfirmOtpError'] = ResolversParentTypes['ConfirmOtpError']
> = {
	code?: Resolver<ResolversTypes['ConfirmOtpErrorCode'], ParentType, ContextType>
	developerMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	endUserMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type DisableOtpResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['DisableOtpResponse'] = ResolversParentTypes['DisableOtpResponse']
> = {
	ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	errors?: Resolver<ReadonlyArray<ResolversTypes['DisableOtpError']>, ParentType, ContextType>
	error?: Resolver<Maybe<ResolversTypes['DisableOtpError']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type DisableOtpErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['DisableOtpError'] = ResolversParentTypes['DisableOtpError']
> = {
	code?: Resolver<ResolversTypes['DisableOtpErrorCode'], ParentType, ContextType>
	developerMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	endUserMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AddMailTemplateResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['AddMailTemplateResponse'] = ResolversParentTypes['AddMailTemplateResponse']
> = {
	ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	errors?: Resolver<ReadonlyArray<ResolversTypes['AddMailTemplateError']>, ParentType, ContextType>
	error?: Resolver<Maybe<ResolversTypes['AddMailTemplateError']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AddMailTemplateErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['AddMailTemplateError'] = ResolversParentTypes['AddMailTemplateError']
> = {
	code?: Resolver<ResolversTypes['AddMailTemplateErrorCode'], ParentType, ContextType>
	developerMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	endUserMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type RemoveMailTemplateResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['RemoveMailTemplateResponse'] = ResolversParentTypes['RemoveMailTemplateResponse']
> = {
	ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	errors?: Resolver<ReadonlyArray<ResolversTypes['RemoveMailTemplateError']>, ParentType, ContextType>
	error?: Resolver<Maybe<ResolversTypes['RemoveMailTemplateError']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type RemoveMailTemplateErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['RemoveMailTemplateError'] = ResolversParentTypes['RemoveMailTemplateError']
> = {
	code?: Resolver<ResolversTypes['RemoveMailTemplateErrorCode'], ParentType, ContextType>
	developerMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	endUserMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CheckResetPasswordTokenResultResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CheckResetPasswordTokenResult'] = ResolversParentTypes['CheckResetPasswordTokenResult']
> = {
	code?: Resolver<ResolversTypes['CheckResetPasswordTokenCode'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CreatePasswordResetRequestResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CreatePasswordResetRequestResponse'] = ResolversParentTypes['CreatePasswordResetRequestResponse']
> = {
	ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	errors?: Resolver<ReadonlyArray<ResolversTypes['CreatePasswordResetRequestError']>, ParentType, ContextType>
	error?: Resolver<Maybe<ResolversTypes['CreatePasswordResetRequestError']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CreatePasswordResetRequestErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CreatePasswordResetRequestError'] = ResolversParentTypes['CreatePasswordResetRequestError']
> = {
	code?: Resolver<ResolversTypes['CreatePasswordResetRequestErrorCode'], ParentType, ContextType>
	developerMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	endUserMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ResetPasswordResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['ResetPasswordResponse'] = ResolversParentTypes['ResetPasswordResponse']
> = {
	ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
	errors?: Resolver<ReadonlyArray<ResolversTypes['ResetPasswordError']>, ParentType, ContextType>
	error?: Resolver<Maybe<ResolversTypes['ResetPasswordError']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ResetPasswordErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['ResetPasswordError'] = ResolversParentTypes['ResetPasswordError']
> = {
	code?: Resolver<ResolversTypes['ResetPasswordErrorCode'], ParentType, ContextType>
	developerMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	endUserMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = any> = {
	Json?: GraphQLScalarType
	Query?: QueryResolvers<ContextType>
	Mutation?: MutationResolvers<ContextType>
	SetupResponse?: SetupResponseResolvers<ContextType>
	SetupResult?: SetupResultResolvers<ContextType>
	SignUpResponse?: SignUpResponseResolvers<ContextType>
	SignUpError?: SignUpErrorResolvers<ContextType>
	SignUpResult?: SignUpResultResolvers<ContextType>
	SignInResponse?: SignInResponseResolvers<ContextType>
	SignInError?: SignInErrorResolvers<ContextType>
	SignInResult?: SignInResultResolvers<ContextType>
	SignOutResponse?: SignOutResponseResolvers<ContextType>
	SignOutError?: SignOutErrorResolvers<ContextType>
	ChangePasswordResponse?: ChangePasswordResponseResolvers<ContextType>
	ChangePasswordError?: ChangePasswordErrorResolvers<ContextType>
	InitSignInIDPResponse?: InitSignInIdpResponseResolvers<ContextType>
	InitSignInIDPResult?: InitSignInIdpResultResolvers<ContextType>
	InitSignInIDPError?: InitSignInIdpErrorResolvers<ContextType>
	SignInIDPResponse?: SignInIdpResponseResolvers<ContextType>
	SignInIDPError?: SignInIdpErrorResolvers<ContextType>
	SignInIDPResult?: SignInIdpResultResolvers<ContextType>
	InviteResponse?: InviteResponseResolvers<ContextType>
	InviteError?: InviteErrorResolvers<ContextType>
	InviteResult?: InviteResultResolvers<ContextType>
	AddProjectMemberResponse?: AddProjectMemberResponseResolvers<ContextType>
	AddProjectMemberError?: AddProjectMemberErrorResolvers<ContextType>
	UpdateProjectMemberResponse?: UpdateProjectMemberResponseResolvers<ContextType>
	UpdateProjectMemberError?: UpdateProjectMemberErrorResolvers<ContextType>
	RemoveProjectMemberResponse?: RemoveProjectMemberResponseResolvers<ContextType>
	RemoveProjectMemberError?: RemoveProjectMemberErrorResolvers<ContextType>
	CreateApiKeyResponse?: CreateApiKeyResponseResolvers<ContextType>
	CreateApiKeyError?: CreateApiKeyErrorResolvers<ContextType>
	CreateApiKeyResult?: CreateApiKeyResultResolvers<ContextType>
	DisableApiKeyResponse?: DisableApiKeyResponseResolvers<ContextType>
	DisableApiKeyError?: DisableApiKeyErrorResolvers<ContextType>
	VariableEntry?: VariableEntryResolvers<ContextType>
	Membership?: MembershipResolvers<ContextType>
	MembershipValidationError?: MembershipValidationErrorResolvers<ContextType>
	Person?: PersonResolvers<ContextType>
	ApiKey?: ApiKeyResolvers<ContextType>
	ApiKeyWithToken?: ApiKeyWithTokenResolvers<ContextType>
	Identity?: IdentityResolvers<ContextType>
	IdentityProjectRelation?: IdentityProjectRelationResolvers<ContextType>
	Project?: ProjectResolvers<ContextType>
	ProjectIdentityRelation?: ProjectIdentityRelationResolvers<ContextType>
	RoleDefinition?: RoleDefinitionResolvers<ContextType>
	RoleVariableDefinition?: RoleVariableDefinitionResolvers<ContextType>
	RoleEntityVariableDefinition?: RoleEntityVariableDefinitionResolvers<ContextType>
	PrepareOtpResponse?: PrepareOtpResponseResolvers<ContextType>
	PrepareOtpResult?: PrepareOtpResultResolvers<ContextType>
	ConfirmOtpResponse?: ConfirmOtpResponseResolvers<ContextType>
	ConfirmOtpError?: ConfirmOtpErrorResolvers<ContextType>
	DisableOtpResponse?: DisableOtpResponseResolvers<ContextType>
	DisableOtpError?: DisableOtpErrorResolvers<ContextType>
	AddMailTemplateResponse?: AddMailTemplateResponseResolvers<ContextType>
	AddMailTemplateError?: AddMailTemplateErrorResolvers<ContextType>
	RemoveMailTemplateResponse?: RemoveMailTemplateResponseResolvers<ContextType>
	RemoveMailTemplateError?: RemoveMailTemplateErrorResolvers<ContextType>
	CheckResetPasswordTokenResult?: CheckResetPasswordTokenResultResolvers<ContextType>
	CreatePasswordResetRequestResponse?: CreatePasswordResetRequestResponseResolvers<ContextType>
	CreatePasswordResetRequestError?: CreatePasswordResetRequestErrorResolvers<ContextType>
	ResetPasswordResponse?: ResetPasswordResponseResolvers<ContextType>
	ResetPasswordError?: ResetPasswordErrorResolvers<ContextType>
}

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>
