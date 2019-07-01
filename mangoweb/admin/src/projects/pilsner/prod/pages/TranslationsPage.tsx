import * as React from 'react'
import { Component, Environment, EnvironmentContext, MultiEditPage, TextField } from 'cms-admin'
import { getSite } from '../utils/environment'

const TranslationInner = (env: Environment) => (
	<TextField label="Translation" name={`translations(site.slug='${getSite(env)}').value`} />
)
const TranslationField = Component(
	props => <EnvironmentContext.Consumer>{TranslationInner}</EnvironmentContext.Consumer>,
	'TranslationInner',
	(props, env) => TranslationInner(env)
)

export const TranslationsPage = (
	<MultiEditPage
		pageName={'translations'}
		entity={'Translatable'}
		rendererProps={{ title: 'String translations', enableAddingNew: false }}
	>
		<TextField label="Identifier" name="identifier" />
		<TranslationField />
	</MultiEditPage>
)
