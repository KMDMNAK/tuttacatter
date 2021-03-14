type PostId = string
type UserId = string
type UserInfoId = string
type UserCredentialsId = string
type UserActivityId = string


declare namespace Model {
    namespace User {
        type Property = {
            id: UserId,
            infoId: UserInfoId,
            credentialsId: UserCredentialsId
            activityId: UserActivityId
        }
    }
    namespace UserCredentials {
        type Property = {
            id: UserCredentialsId
            userId: UserId

            account: string
            password: string
        }
    }

    namespace UserInfo {
        type Property = {
            id: UserInfoId
            userId: UserId

            name?: string
            email?: string
            birth?: Date
        }
    }

    namespace UserActivity {
        type Property = {
            id: UserActivityId
            userId: UserId

            likePost: PostId[]
            followers: UserId[]
            follows: UserId[]
        }
    }

    namespace Post {
        type Property = {
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
    }
}