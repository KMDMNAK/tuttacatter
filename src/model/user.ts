export class UserModel implements Model.User.Property {
    id: UserId
    infoId: UserInfoId
    credentialsId: UserCredentialsId
    activityId: UserActivityId
}