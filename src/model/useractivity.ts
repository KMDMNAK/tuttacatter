export class UserActivityModel implements Model.UserActivity.Property {
    id: UserActivityId
    userId: UserId

    likePost: PostId[]
    followers: UserId[]
    follows: UserId[]
}

