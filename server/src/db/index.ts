import { MongoClient, Db } from 'mongodb'

import { UserCollection } from '../models/user'
import { PostCollection } from '../models/post'
import { UserCredentialsCollection } from '../models/usercredentials'
import { UserInfoCollection } from '../models/userinfo'
import { FollowCollection } from '../models/follow'
import { LikeCollection } from '../models/like'

import { DB_HOST, DB_NAME } from '../env'

export interface Collections {
    User: UserCollection,
    Post: PostCollection,
    UserCredentials: UserCredentialsCollection,
    UserInfo: UserInfoCollection,
    Like: LikeCollection,
    Follow: FollowCollection
}

export const connectDB = async (host: string, dbName: string) => {
    const url = `mongodb://${host}:27017`
    const _client = new MongoClient(url, { useUnifiedTopology: true });
    const client = await _client.connect()
    const db = client.db(dbName);
    return db
}

class Database {
    dbP: Promise<Db>
    collectionsP: Promise<Collections>
    constructor() {
        this.dbP = connectDB(DB_HOST, DB_NAME)
        this.collectionsP = this.createCollections()
    }
    async createCollections() {
        const db = await this.dbP
        return {
            User: new UserCollection(db, 'User'),
            UserCredentials: new UserCredentialsCollection(db, 'UserCredentials'),
            UserInfo: new UserInfoCollection(db, 'UserInfo'),
            Post: new PostCollection(db, 'Post'),
            Like: new LikeCollection(db, 'Like'),
            Follow: new FollowCollection(db, 'Follow')
        }
    }
    getCollections() {
        return this.collectionsP
    }
}

export const db = new Database()