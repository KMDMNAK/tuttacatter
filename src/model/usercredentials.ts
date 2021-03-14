export class UserCredentialsModel implements Model.UserCredentials.Property {
    id: UserCredentialsId
    userId: UserId

    account: string
    password: string
}