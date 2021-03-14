import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { convertUserInfoToSend } from '../../modules/view'

const ViewUserInfoHandler: RequestHandler<
    ParamsDictionary,
    API.User.Info.ResponseBody,
    any,
    API.User.Info.Query,
    Middleware.UserConfirmLocals
> = async (req, res, next) => {
    const { user } = res.locals
    try {
        const infoToSend = await convertUserInfoToSend(user)
        res.send(infoToSend)
    } catch (err) {
        next(err)
    }
}

export default ViewUserInfoHandler