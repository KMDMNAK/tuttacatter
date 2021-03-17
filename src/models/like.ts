import { BaseCollection, BaseModel } from '../db/model'

export class FollowModel extends BaseModel<Model.Like.Property> {}

export class LikeCollection extends BaseCollection<Model.Like.Property>{
    collectionName = "Like"
    protected initializeModel(properties: Model.Post.Property): FollowModel {
        const model = new FollowModel(this, properties)
        return model
    }
}