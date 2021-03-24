import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { ViewModule } from '../../modules'

import { ConfirmUserLocals } from '../../middlewares'

const ViewUserInfoHandler: RequestHandler<
    ParamsDictionary,
    API.View.Info.ResponseBody,
    any,
    API.View.Info.Query,
    ConfirmUserLocals
> = async (req, res, next) => {
    const { targetUser } = res.locals
    try {
        const infoToSend = await ViewModule.convertUserInfoToSend(targetUser)
        res.send(infoToSend)
    } catch (err) {
        next(err)
    }
}

export default ViewUserInfoHandler