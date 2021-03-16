import { Db, Collection, FilterQuery } from 'mongodb'

export class BaseCollection<T>{
    protected collectionName: string
    protected collection: Collection<{ _id: string }>
    private Model = BaseModel
    createDocument(properties: T) {
        return new this.Model(this, properties)
    }
    updateById(id: string, properties: T) {
        return this.collection.updateOne({ _id: id }, { $set: properties })
    }
    findOneById(id: string) {
        return this.collection.findOne({ _id: id })
    }
}

export class BaseModel<T>{
    protected properties: T
    protected collectionName: string
    protected _id: string
    protected collectionWrapper: BaseCollection<T>

    constructor(collectionWrapper: BaseCollection<T>, properties: T) {
        this.collectionWrapper = collectionWrapper
        this.properties = properties
    }
    // TODO use partial
    set(properties: T, options: { merge: boolean }) {
        if (options.merge) {
            Object.assign({}, this.properties, properties)
            return
        }
        this.properties = properties
    }
    save() {
        return this.collectionWrapper.updateById(this._id, this.properties)
    }
}