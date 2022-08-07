import { Router } from 'express'
import { createProject } from '../controllers/crearProject.controller'
import { getAllProjects } from '../controllers/getAllProjects.controller'

const routes = Router()

routes.get('', getAllProjects)
routes.post('', createProject)

export default routes
