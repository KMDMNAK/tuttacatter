export class Post {
    id: PostId
    user: UserId

    body: string
    lastUpdatedAt: Date
    publishedAt: Date

    isComment: boolean
    targetPostId?: PostId
    comments: PostId[]

    likedUser: UserId[]
}