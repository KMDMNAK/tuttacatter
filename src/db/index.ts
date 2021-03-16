import { MongoClient } from 'mongodb'

export const connectDB = async (host: string, dbName: string) => {
    const url = `mongodb://${host}:27017`
    const _client = new MongoClient(url);
    const client = await _client.connect()
    const db = client.db(dbName);
    const a = await db.collection<{ test: number }>("").findOne({ _id: "0" })
    return db
}