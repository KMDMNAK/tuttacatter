import { PostModel } from "tuttacatter/model/post"
import { UserModel } from "tuttacatter/model/user"


export const getUser = (user: string) => {
    if (false) return null
    return {}
}

export const followUser = async (users: { user: UserModel, targetUser: UserModel }) => { }
export const unfollowUser = async (users: { user: UserModel, targetUser: UserModel }) => { }


export const likeUser = async (users: { user: UserModel, targetUser: UserModel }) => { }
export const unlikeUser = async (users: { user: UserModel, targetUser: UserModel }) => { }

export const editPost = async (postId: PostId, newBody: string) => { }

export const post = async (user: UserModel, newBody: string): Promise<PostModel> => {
    return {} as any
}