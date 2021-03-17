import { BaseCollection, BaseModel } from '../db/model'

export class PostModel extends BaseModel<Model.Post.Property> {
    // id: PostId
    // userId: UserId

    // body: string
    // lastUpdatedAt: Date
    // publishedAt: Date

    // isComment: boolean
    // targetPostId?: PostId
    // comments: PostId[]

    // likedUser: UserId[]
}

export class PostCollection extends BaseCollection<Model.Post.Property>{
    collectionName = "Post"
    protected initializeModel(properties: Model.Post.Property): PostModel {
        const model = new PostModel(this, properties)
        return model
    }
}