import { BaseCollection, BaseModel } from '../db/model'

export class UserInfoModel extends BaseModel<Model.UserInfo.Property> { }

export class UserInfoCollection extends BaseCollection<Model.UserInfo.Property>{
    collectionName = "UserInfo"
    protected initializeModel(properties: Model.UserInfo.Property): UserInfoModel {
        const model = new UserInfoModel(this, properties)
        return model
    }
}