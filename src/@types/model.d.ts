type PostId = any
type UserId = any
type UserInfoId = any
type UserCredentialsId = any
type FollowId = any
type LikeId = any


declare namespace Model {
    namespace User {
        type Property = {
            _id: UserId,
            infoId?: UserInfoId,
            credentialsId?: UserCredentialsId
        }
    }
    namespace UserCredentials {
        type Property = {
            _id: UserCredentialsId
            userId: UserId

            account: string
            password: string
        }
    }

    namespace UserInfo {
        type Property = {
            _id: UserInfoId
            userId: UserId

            name?: string
            email?: string
            birth?: Date
        }
    }

    namespace Post {
        type Property = {
            _id: PostId
            userId: UserId

            body: string
            lastUpdatedAt: Date
            publishedAt: Date

            isComment: boolean
            targetPostId?: PostId
        }
    }
    namespace Follow {
        type Property = {
            _id: FollowId
            userId: UserId
            targetUserId: UserId
        }
    }
    namespace Like {
        type Property = {
            _id: LikeId
            userId: UserId
            postId: PostId
        }
    }
}