import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { AuthModule } from '../../modules'

const handler: RequestHandler<
    ParamsDictionary,
    API.Login.ResponseBody,
    API.Login.RequestBody,
    Query
> = async (req, res, next) => {
    const { account, password } = req.body
    const credentials = await AuthModule.getUserCredentials(account)
    if (!credentials) {
        res.status(400)
        return res.send({ err: `Account ${account} does not exists.` })
    }
    if (await AuthModule.verifyUserPassword(credentials, password)) {
        res.status(400)
        return res.send({ err: `Invalid Password` })
    }
    try {
        const token = await AuthModule.loginUser(credentials)
        res.send({ token })
    } catch (err) {
        next(err)
    }
}

export default handler