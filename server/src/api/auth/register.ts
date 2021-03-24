import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { AuthModule } from '../../modules'

const handler: RequestHandler<
    ParamsDictionary,
    API.Register.ResponseBody,
    API.Register.RequestBody,
    Query
> = async (req, res, next) => {
    const { account, password } = req.body
    if (await AuthModule.existsAccount(account)) {
        res.status(400)
        return res.send({ err: `Account ${account} already exists.` })
    }
    if (AuthModule.invalidPassword(password)) {
        res.status(400)
        return res.send({ err: `Invalid Password` })
    }
    try {
        const credentials = await AuthModule.registerUser(account, password)
        const token = await AuthModule.loginUser(credentials)
        return res.send({ token })
    } catch (err) {
        next(err)
    }
}

export default handler