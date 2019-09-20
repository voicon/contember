import { ProjectConfig } from 'cms-admin'
import quanti from '@mangoweb/contember-project-quanti-admin'
import mangoweb from '@mangoweb/contember-project-mangoweb-admin'
import blog from '@mangoweb/contember-project-sandbox-admin'
import pilsner from '@mangoweb/contember-project-pilsner-admin'
import hranipex from '@mangoweb/contember-project-hranipex-admin'

const config: ProjectConfig[] = [...blog, ...mangoweb, ...quanti, ...pilsner, ...hranipex]

export default config
