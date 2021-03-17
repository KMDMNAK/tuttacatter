import { BaseCollection, BaseModel } from '../db/model'
export class UserActivityModel extends BaseModel<Model.UserActivity.Property>{
    // id: UserActivityId
    // userId: UserId

    // likePost: PostId[]
    // followers: UserId[]
    // follows: UserId[]
}


export class UserActivityCollection extends BaseCollection<Model.UserActivity.Property>{
    collectionName = "UserActivity"
    protected initializeModel(properties: Model.UserActivity.Property): UserActivityModel {
        const model = new UserActivityModel(this, properties)
        return model
    }
}