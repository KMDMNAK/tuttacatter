import { UserModel } from '../models/user'

export const getPostById = async (postId: string) => {
    return {}
}

export const convertPostToSend = async (post: any) => {
    return post
}

export const convertPostsToSend = async (posts: any[]) => {
    return Promise.all(posts.map(convertPostToSend))
}


export const existsAccount = async (userId: string) => {
    return false
}

export const getUserPosts = async (user: UserModel, page: number) => {
    return []
}

export const getUserInfoToSend = async (userId: string) => {
    return {}
}

export const convertUserInfoToSend = async (user: UserModel) => {
    return {
        user
    }
}