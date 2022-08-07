import { Project } from '../../domain/entities/Project'
import { ProjectRepository } from '../../domain/repositories/ProjectRepository'

export class ProjectSaverUseCase {
  private readonly _projectRepository: ProjectRepository

  constructor(projectRepository: ProjectRepository) {
    this._projectRepository = projectRepository
  }

  async execute(projectInserted: Project): Promise<Project> {
    const project: Project = await this._projectRepository.save(projectInserted)
    return project
  }
}
