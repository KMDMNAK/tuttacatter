import { db, Collections } from '../db'
import { UserCollection as UserCollectionType } from '../models/user'

export class BaseModuleProvider {
    collectionsP: Promise<Collections>
    constructor(collections: Promise<Collections>) {
        const collectionsP = collections
        this.collectionsP = collectionsP
    }
}