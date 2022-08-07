export class ProjectNotFoundException extends Error {
  constructor() {
    super('Project Not Found!')
  }
}
