import { BaseCollection, BaseModel } from '../db/model'

export class LikeModel extends BaseModel<Model.Like.Property> { }

export class LikeCollection extends BaseCollection<Model.Like.Property>{
    collectionName = "Like"
    protected initializeModel(properties: Model.Like.Property): LikeModel {
        const model = new LikeModel(this, properties)
        return model
    }
}