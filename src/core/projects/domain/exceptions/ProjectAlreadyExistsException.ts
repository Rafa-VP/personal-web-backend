export class ProjectAlreadyExistsException extends Error {
  constructor() {
    super('Project already exist!')
  }
}
