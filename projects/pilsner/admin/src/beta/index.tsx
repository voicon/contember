import { Pages } from 'cms-admin'
import * as React from 'react'
import { Layout } from '../base/Layout'
import * as pageList from '../base/pages'
import '../../../src/base/_theme.sass'
import '../../../src/beta/_theme.sass'

export default () => <Pages layout={() => <Layout deployButton={false}/>} children={Object.values(pageList)} />
