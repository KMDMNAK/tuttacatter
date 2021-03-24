import { Db, Collection, FilterQuery, OptionalId, ObjectId, WithId } from 'mongodb'
import { createRandomId } from '../db/utils'

export abstract class BaseCollection<T extends { _id: ObjectId, [key: string]: any }> {
    collectionName: string | null = null
    collection: Collection<T>
    constructor(db: Db, collectionName: string) {
        this.collectionName = collectionName
        this.collection = db.collection<T>(this.collectionName)
    }
    async createDocument(properties: Partial<T>) {
        if (!properties._id) {
            properties._id = createRandomId()
        }
        const doc = await this.collection.insertOne(properties as OptionalId<T>)
        const ops = doc.ops[0]
        const model = this.initializeModel(ops)
        return model
    }
    protected abstract initializeModel(properties: WithId<T>): BaseModel<T>

    updateById(id: ObjectId, properties: T) {
        return this.collection.updateOne({ _id: id } as T, { $set: properties })
    }
    async findOneById(id: ObjectId | string) {
        const doc = await this.collection.findOne({ _id: id } as T)
        if (!doc) return null
        const model = this.initializeModel(doc as WithId<T>)
        return model
    }
    async delete(id: ObjectId) {
        return this.collection.deleteOne({ _id: id } as T)
    }

    async findByFields(fields: Partial<T>) {
        const doc = await this.collection.findOne(fields)
        if (!doc) return null
        return this.initializeModel(doc as WithId<T>)
    }
    async findManyByFields(fields: Partial<T>) {
        const docs = await this.collection.find(fields).toArray()
        if (!docs.length) return null
        return docs.map(doc => this.initializeModel(doc as WithId<T>))
    }
}

export class BaseModel<T extends { _id: ObjectId, [key: string]: any }>{
    protected properties: T
    protected collectionName: string | null = null
    id: ObjectId
    protected collectionWrapper: BaseCollection<T>

    constructor(collectionWrapper: BaseCollection<T>, properties: T) {
        this.collectionWrapper = collectionWrapper
        this.properties = properties
        this.collectionName = collectionWrapper.collectionName
        this.id = this.properties._id
    }
    // TODO use partial
    set(properties: T, options: {}) {
        if (properties._id !== this.properties._id) throw Error('Violation fixed _id')
        this.properties = properties
        return this.save()
    }
    update(properties: Partial<T>) {
        Object.assign(this.properties, properties)
        return this.save()
    }
    save() {
        if (!this.id) throw Error('No _id')
        return this.collectionWrapper.updateById(this.id, this.properties)
    }
    data() {
        return this.properties
    }
    delete() {
        return this.collectionWrapper.delete(this.id)
    }
}