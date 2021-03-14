import { UserModel } from '../model/user'

export const alreadyExists = (account: string): boolean => {
    return false
}

export const invalidPassword = (password: string): boolean => {
    return false
}

export const notExistsAccount = (account: string) => {
    return false
}

export const missmatchPassword = (password: string) => {
    return false
}

export async function registerUser(
    account: string, password: string
): Promise<any> { }

export async function loginUser(
    account: string, password: string
): Promise<any> { }

export const invalidAccessToken = (token: any): UserModel | null => {
    return {} as any
}

export const notExistsUser = (userId: string) => {
    return false
}