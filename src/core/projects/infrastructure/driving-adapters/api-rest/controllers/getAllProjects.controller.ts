import { ProjectGetterUseCase } from '../../../../application/use-cases/ProjectGetter'
import { Request, Response } from 'express'
import { MongoProjectRepository } from '../../../implementations/mongo/MongoProjectRepository'

export const getAllProjects = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  const mongoProjectRepo = new MongoProjectRepository()
  const projectGetterUseCase = new ProjectGetterUseCase(mongoProjectRepo)
  try {
    const projects = await projectGetterUseCase.execute()
    res.json(projects)
    return
  } catch (e) {
    res.status(400).json({
      message: e,
    })
  }
}
