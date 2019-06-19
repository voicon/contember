import { ProjectConfig } from 'cms-admin'
import blog from './blog'
import mangoweb from './mangoweb'
import quanti from './quanti'

const config: ProjectConfig[] = [...blog, ...mangoweb, ...quanti]

export default config
