import * as mongoose from "mongoose"

export const connection = async () => {
    const host = process.env.MONGO_HOST
    const port = process.env.MONGO_PORT
    const user = process.env.MONGO_USER
    const password = process.env.MONGO_PASSWORD
    const database = process.env.MONGO_DATABASE
    const dsn = `mongodb://${user}:${password}@${host}:${port}/${database}`
    await mongoose.connect(dsn)
}