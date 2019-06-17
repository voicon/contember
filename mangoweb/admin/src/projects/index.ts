import { ProjectConfig } from 'cms-admin'
import blog from './blog'
import mangoweb from './mangoweb'
import quanti from './quanti'
import pilsner from './pilsner'

const config: ProjectConfig[] = [...blog, ...mangoweb, ...quanti, ...pilsner]

export default config
