import { Project } from '../../../domain/entities/Project'
import { ProjectRepository } from '../../../domain/repositories/ProjectRepository'
import { ProjectModel } from './model/ProjectModel'

export class MongoProjectRepository implements ProjectRepository {
  async getAll(): Promise<Project[]> {
    const projects: Project[] = await ProjectModel.find()
    return projects
  }

  async save(project: Project): Promise<Project> {
    const projectMongo = await ProjectModel.create(project)
    const projectCreated: Project = {
      _id: projectMongo.id,
      members: projectMongo.members,
      name: projectMongo.name,
      publishDate: projectMongo.publishDate,
    }
    return projectCreated
  }
}
