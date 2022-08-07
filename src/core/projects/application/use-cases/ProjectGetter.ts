import { Project } from '../../domain/entities/Project'
import { ProjectRepository } from '../../domain/repositories/ProjectRepository'

export class ProjectGetterUseCase {
  private readonly _projectRepository: ProjectRepository

  constructor(projectRepository: ProjectRepository) {
    this._projectRepository = projectRepository
  }

  async execute(): Promise<Project[]> {
    const projects: Project[] = await this._projectRepository.getAll()
    return projects
  }
}
