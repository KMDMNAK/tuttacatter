import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { ConfirmUserLocals } from 'tuttacatter/middlewares/user'
import { AuthModule, ViewModule } from 'tuttacatter/modules'

const TimelineHandler: RequestHandler<
    ParamsDictionary,
    API.View.Timeline.ResponseBody,
    any,
    API.View.Timeline.Params,
    ConfirmUserLocals
> = async (req, res, next) => {
    const { targetUser } = res.locals
    const { limit, page } = req.query
    const posts = await ViewModule.getPosts(targetUser, page || 0)
    if (!posts) {
        res.status(404)
        return res.send({ posts: [] })
    }
    try {
        const sendData = { posts: await Promise.all(posts.map(post => ViewModule.convertPostToSend(post))) }
        res.send(sendData)
    } catch (err) {
        next(err)
    }
}

export default TimelineHandler