import { BaseCollection, BaseModel } from '../db/model'

export class PostModel extends BaseModel<Model.Post.Property> { }

export class PostCollection extends BaseCollection<Model.Post.Property>{
    collectionName = "Post"
    protected initializeModel(properties: Model.Post.Property): PostModel {
        const model = new PostModel(this, properties)
        return model
    }
}