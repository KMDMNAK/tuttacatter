export class PostModel implements Model.Post.Property {
    id: PostId
    userId: UserId

    body: string
    lastUpdatedAt: Date
    publishedAt: Date

    isComment: boolean
    targetPostId?: PostId
    comments: PostId[]

    likedUser: UserId[]
}