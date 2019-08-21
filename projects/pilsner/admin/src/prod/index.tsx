import { Pages } from 'cms-admin'
import * as React from 'react'
import { Layout } from '../base/Layout'
import * as pageList from '../base/pages'
import '../../../src/base/_theme.sass'
import '../../../src/prod/_theme.sass'

export default () => <Pages project={'pilsner'} stage={'prod'} layout={() => <Layout deployButton={true}/>} children={Object.values(pageList)} />
