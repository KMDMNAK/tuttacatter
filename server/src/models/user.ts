import { BaseCollection, BaseModel } from '../db/model'

export class UserModel extends BaseModel<Model.User.Property> { }

export class UserCollection extends BaseCollection<Model.User.Property>{
    collectionName = "User"
    protected initializeModel(properties: Model.User.Property): UserModel {
        const model = new UserModel(this, properties)
        return model
    }
}