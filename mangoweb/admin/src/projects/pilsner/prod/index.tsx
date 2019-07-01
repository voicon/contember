import { Pages } from 'cms-admin'
import * as React from 'react'
import { Layout } from './Layout'
import * as pageList from './pages'

export default () => <Pages project="pilsner" stage="prod" layout={Layout} children={Object.values(pageList)} />
