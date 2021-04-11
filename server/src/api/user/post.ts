import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { UserModule } from '../../modules'
import { VerifyUserLocals } from '../../middlewares/auth'

export const PostHandler: RequestHandler<
    ParamsDictionary,
    API.User.Post.ResponseBody,
    Partial<API.User.Post.RequestBody>,
    any,
    VerifyUserLocals
> = async (req, res, next) => {
    const { newBody } = req.body
    const { user } = res.locals
    try {
        if (!newBody) {
            res.status(400)
            return res.send({ err: "No body is providen" })
        }
        const postModel = await UserModule.post(user, newBody)
        if(!postModel){
            res.status(500)
            return res.send({ err: "Internal Server Error" })
        }
        return res.send({ post: postModel.data() })
    } catch (err) {
        next(err)
    }
}

