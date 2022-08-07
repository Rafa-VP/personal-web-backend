import { Request, Response } from 'express'
import { MongoProjectRepository } from '../../../implementations/mongo/MongoProjectRepository'
import { ProjectSaverUseCase } from '../../../../application/use-cases/ProjectSaver'
import { ProjectAlreadyExistsException } from '../../../../domain/exceptions/ProjectAlreadyExistsException'

export const createProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, members } = req.body
  const mongoProjectRepo = new MongoProjectRepository()
  const projectSaverUseCase = new ProjectSaverUseCase(mongoProjectRepo)
  try {
    const projectCreated = await projectSaverUseCase.execute({
      name,
      members,
      publishDate: new Date(),
    })
    res.json(projectCreated)
    return
  } catch (e) {
    res.status(400).json({
      message: new ProjectAlreadyExistsException(),
    })
  }
}
