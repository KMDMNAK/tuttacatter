import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { missmatchPassword, notExistsAccount, loginUser } from '../../modules/auth'

const handler: RequestHandler<
    ParamsDictionary,
    API.Login.ResponseBody,
    API.Login.RequestBody,
    Query
> = async (req, res, next) => {
    const { account, password } = req.body
    if (notExistsAccount(account)) {
        res.status(400)
        return res.send(`Account ${account} does not exists.`)
    }
    if (missmatchPassword(password)) {
        res.status(400)
        return res.send(`Invalid Password`)
    }
    try {
        const a = await loginUser(account, password)
    } catch (err) {
        next(err)
    }
}

export default handler