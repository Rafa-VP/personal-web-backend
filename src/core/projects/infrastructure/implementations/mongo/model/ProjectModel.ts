import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
  {
    name: String,
    publishDate: Date,
    members: [String],
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

projectSchema.set('collection', 'projects')

export const ProjectModel = mongoose.model('projects', projectSchema)

