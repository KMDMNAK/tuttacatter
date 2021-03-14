import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { alreadyExists, invalidPassword, registerUser } from '../../modules/auth'

const handler: RequestHandler<
    ParamsDictionary,
    API.Register.ResponseBody,
    API.Register.RequestBody,
    Query
> = async (req, res, next) => {
    const { account, password } = req.body
    if (alreadyExists(account)) {
        res.status(400)
        return res.send(`Account ${account} already exists.`)
    }
    if (invalidPassword(password)) {
        res.status(400)
        return res.send(`Invalid Password`)
    }
    try {
        const a = await registerUser(account, password)
        return res.send(true)
    } catch (err) {
        next(err)
    }
}

export default handler