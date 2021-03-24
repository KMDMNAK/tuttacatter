import { connectDB } from 'tuttacatter/db'
import { Db } from 'mongodb'

describe('', () => {
    let db: Db
    beforeAll(async () => {
        db = await connectDB('database', 'test')
    })
    it('schema', async () => {
        db.collection
        const schema = new db.Schema(C1)
        const Model = model('C1', C1)
        const c1 = new Model({ test1: "test11", test2: "afd" })
        // c1.test1 = "teapo"
        await c1.save()
    })
})