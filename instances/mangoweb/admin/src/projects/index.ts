import { ProjectConfig } from 'cms-admin'
import quanti from '@mangoweb/contember-project-quanti-admin'
import mangoweb from '@mangoweb/contember-project-mangoweb-admin'
import blog from '@mangoweb/contember-project-sandbox-admin'
import pilsner from '@mangoweb/contember-project-pilsner-admin'

const config: ProjectConfig[] = [...blog, ...mangoweb, ...quanti, ...pilsner]

export default config
