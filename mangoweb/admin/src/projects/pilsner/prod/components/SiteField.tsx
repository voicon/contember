import { getSite } from '../utils/environment'
import * as React from 'react'
import { Component, Environment, EnvironmentContext, SelectField } from 'cms-admin'

const SiteFieldInner = (env: Environment) => (
	<SelectField options={"Site[slug='" + getSite(env) + "'].name"} name={'site'} label={'Site'} />
)

export const SiteField = Component(
	props => <EnvironmentContext.Consumer>{SiteFieldInner}</EnvironmentContext.Consumer>,
	'SiteField',
	(props, env) => SiteFieldInner(env)
)
