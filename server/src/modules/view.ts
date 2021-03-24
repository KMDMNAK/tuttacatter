
import { BaseModuleProvider } from './provider'

import { PostModel } from 'tuttacatter/models/post'
import { UserModel } from 'tuttacatter/models/user'
import { ObjectId } from 'mongodb'

export class ViewModuleProvider extends BaseModuleProvider {
    async getUserAccount(userId: string) {
        const { UserCredentials } = await this.collectionsP
        const credentials = await UserCredentials.collection.findOne({ userId })
        return credentials?.account
    }
    async getPost(postId: ObjectId) {
        const { Post } = await this.collectionsP
        const doc = await Post.findOneById(postId)
        if (!doc) return null
        return doc
    }

    async convertPostToSend(post: PostModel): Promise<API.PostItem> {
        const { body, lastUpdatedAt, publishedAt, userId } = post.data()
        const account = await this.getUserAccount(userId)
        if (!account) throw Error('No Account')
        if (!lastUpdatedAt) throw Error('Not lastUpdatedAt')
        return { body, lastUpdatedAt, publishedAt, account }
    }

    async convertUserInfoToSend(user: UserModel) {
        const data = user.data()
        const { UserInfo } = await this.collectionsP
        if (!data.infoId) return null
        const infoDoc = await UserInfo.findOneById(data.infoId)
        if (!infoDoc) return null
        const { email, name, birth } = infoDoc.data()
        return { email, name, birth }
    }

    async getPosts(user: UserModel, limit: number = 10) {
        const { Post } = await this.collectionsP
        const docs = await Post.collection.find({ userId: user.id }).limit(limit).toArray()
        if (!docs) return null
        return docs
    }
    async getTimeline(limit: number = 10) {
        const { Post } = await this.collectionsP
        const docs = await Post.collection.find().sort({ publishedAt: -1 }).limit(limit).toArray()
        if (!docs) return null
        return docs
    }
}

// export const convertPostsToSend = async (posts: any[]) => {
//     return Promise.all(posts.map(convertPostToSend))
// }


// export const existsAccount = async (userId: string) => {
//     return false
// }

// export const getUserPosts = async (user: UserModel, page: number) => {
//     return []
// }

// export const getUserInfoToSend = async (userId: string) => {
//     return {}
// }

// export const convertUserInfoToSend = async (user: UserModel) => {
//     return {
//         user
//     }
// }