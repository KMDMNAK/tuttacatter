import { BaseCollection, BaseModel } from '../db/model'

export class UserCredentialsModel extends BaseModel<Model.UserCredentials.Property> {}

export class UserCredentialsCollection extends BaseCollection<Model.UserCredentials.Property>{
    collectionName = "UserCredentials"
    protected initializeModel(properties: Model.UserCredentials.Property): UserCredentialsModel {
        const model = new UserCredentialsModel(this, properties)
        return model
    }
    async findByUserAccount(account: string) {
        const document = await this.collection.findOne({ account })
        if (!document) return null
        return this.initializeModel(document)
    }
}