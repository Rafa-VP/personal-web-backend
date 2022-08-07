import { Router } from 'express'
import projectRoutes from "../../../core/projects/infrastructure/driving-adapters/api-rest/routes/project.routes"

const routes = Router()

routes.use('/projects', projectRoutes)

export default routes
