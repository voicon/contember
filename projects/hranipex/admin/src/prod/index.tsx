import { Pages } from 'cms-admin'
import * as React from 'react'
import { Layout } from './Layout'
import * as pageList from './pages'
import '../../../src/prod/_theme.sass'

export default () => <Pages layout={Layout} children={Object.values(pageList)} />
