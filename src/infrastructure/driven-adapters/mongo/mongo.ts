import mongoose from 'mongoose'
import 'dotenv/config'

export class MongoDB {
  private URI: string = process.env.MONGO_URI as string
  connect() {
    //conectando a mongoose
    mongoose
      .connect(this.URI)
      .then(() => {
        console.log('Connected to mongo')
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
