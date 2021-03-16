
export class UserInfoModel implements Model.UserInfo.Property {
    id: UserInfoId
    userId: UserId

    account: string
    password: string

    name: string
    email: string
}