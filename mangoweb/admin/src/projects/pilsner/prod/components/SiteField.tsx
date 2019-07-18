import { Component, Connection } from 'cms-admin'
import * as React from 'react'

export const SiteField = Component(() => <Connection field="site" to="(slug = $site)" />, 'SiteField')
