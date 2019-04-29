import { combineReducers } from 'redux'
import State from '../state'
import Auth from './auth'
import Content from './content'
import DataTrees from './dataTrees'
import ProjectsConfigs from './projectsConfigs'
import Request from './request'
import System from './system'
import Toasts from './toasts'
import Upload from './upload'
import View from './view'

export default combineReducers<State>({
	request: Request,
	view: View,
	auth: Auth,
	content: Content,
	projectsConfigs: ProjectsConfigs,
	upload: Upload,
	toasts: Toasts,
	dataTrees: DataTrees,
	system: System
})
