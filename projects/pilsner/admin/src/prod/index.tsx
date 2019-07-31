import { Pages } from 'cms-admin'
import * as React from 'react'
import { Layout } from './Layout'
import * as pageList from './pages'
import '../../../../../src/projects/pilsner/prod/_theme.sass'

export default () => <Pages project="pilsner" stage="prod" layout={Layout} children={Object.values(pageList)} />
