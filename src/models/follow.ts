import { BaseCollection, BaseModel } from '../db/model'

export class FollowModel extends BaseModel<Model.Follow.Property> { }

export class FollowCollection extends BaseCollection<Model.Follow.Property>{
    collectionName = "Follow"
    protected initializeModel(properties: Model.Follow.Property): FollowModel {
        const model = new FollowModel(this, properties)
        return model
    }
}