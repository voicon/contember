import { Component, Connection } from 'cms-admin'
import * as React from 'react'

export const SiteField = Component(() => null, 'SiteField', (props, environment) => (
	<Connection field="site" to={{ slug: environment.getDimensionOrElse('site', ['en'])[0] }} />
))
