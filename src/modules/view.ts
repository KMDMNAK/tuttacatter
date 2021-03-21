
import { BaseModuleProvider } from './provider'

import { PostModel } from 'tuttacatter/models/post'
import { UserModel } from 'tuttacatter/models/user'

export class ViewModuleProvider extends BaseModuleProvider {
    async getPost(postId: string) {
        const { Post } = await this.collectionsP
        const doc = await Post.findOneById(postId)
        if (!doc) return null
        return doc
    }

    async convertPostToSend(post: PostModel) {
        const data = post.data()
        return { body: data.body }
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

    async getPosts(user: UserModel, limit: number) {
        const { Post } = await this.collectionsP
        const docs = Post.findManyByFields({ userId: user.id })
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