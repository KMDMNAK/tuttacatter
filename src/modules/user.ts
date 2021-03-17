import { PostModel } from "tuttacatter/models/post"
import { UserModel } from "tuttacatter/models/user"
import { BaseModuleProvider } from './provider'

export class UserModuleProvider extends BaseModuleProvider {
    private async getUserActivities(users: { user: UserModel, targetUser: UserModel }) {
        const { user, targetUser } = users
        const collecions = await this.collectionsP
        const userData = user.data()
        const userActivity = await collecions.UserActivity.findOneById(userData.activityId)
        if (!userActivity) throw Error('failed to initialize this user.')

        const targetUserData = targetUser.data()
        const targetUserActivity = await collecions.UserActivity.findOneById(targetUserData.activityId)
        if (!targetUserActivity) throw Error('failed to initialize this user.')
        return { userActivity, targetUserActivity }
    }
    getUser(user: string) {
        if (false) return null
        return {}
    }
    async followUser(users: { user: UserModel, targetUser: UserModel }) {
        // TODO Database Transaction
        // const { userActivity, targetUserActivity } = await this.getUserActivities(users)
        const { user, targetUser } = users
        const { Follow } = await this.collectionsP
        const doc = await Follow.findByFields({ userId: user.id, targetUserId: targetUser.id })
        if (doc) return
        const newOne = await Follow.createDocument({
            userId: user.id, targetUserId: targetUser.id
        })
        return newOne
    }
    async unfollowUser(users: { user: UserModel, targetUser: UserModel }) {
        const { user, targetUser } = users
        const collections = await this.collectionsP
        const doc = await collections.Follow.findByFields({ userId: user.id, targetUserId: targetUser.id })
        if (!doc) return
        return doc.delete()
    }
    async likePost(user: UserModel, postId: PostId) {
        const { Like } = await this.collectionsP
        const doc = await Like.findByFields({ userId: user.id, postId })
        if (doc) return
        const newOne = await Like.createDocument({
            userId: user.id, postId
        })
        return newOne
    }
    async unlikePost(user: UserModel, postId: PostId) {
        const { Like } = await this.collectionsP
        const doc = await Like.findByFields({ userId: user.id, postId })
        if (!doc) return
        return doc.delete()
    }
    async getPost(postId: PostId) {
        const { Post } = await this.collectionsP
        const post = await Post.findOneById(postId)
        if (!post) return null
        return post
    }
    async editPost(post: PostModel, newBody: string) {
        return post.update({ body: newBody })
    }
    async post(user: UserModel, body: string, targetPostId?: string): Promise<PostModel> {
        const { Post } = await this.collectionsP
        const post = await Post.createDocument({
            userId: user.id,

            lastUpdatedAt: new Date(),
            publishedAt: new Date(),
            body: body,

            isComment: !!targetPostId,
            targetPostId
        })
        return post
    }
}