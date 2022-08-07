import { Project } from '../entities/Project'

export interface ProjectRepository {
  getAll: () => Promise<Project[]>
  save: (project: Project) => Promise<Project>
  // update: (project: Project) => Promise<Project>
  //delete: (project: Project) => Promise<void>
  //getById: (id: string) => Promise<Project | null>
}
