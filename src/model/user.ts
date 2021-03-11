export class User {
    id: UserId
    info: UserInfoId
    likePost: PostId[]

    followers: UserId[]
    follows: UserId[]
}

