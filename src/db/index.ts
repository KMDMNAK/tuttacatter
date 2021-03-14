import { connect, Schema } from 'mongoose'
export const connectDB = async (host: string, dbName: string) => {
    const db = await connect(
        `mongodb://${host}:27017/${dbName}`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
    return db
}