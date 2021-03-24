export const DB_HOST = process.env.DB_HOST || 'database'
export const DB_NAME = process.env.DB_NAME || 'test'
export const DB_PORT = Number(process.env.DB_PORT || 3000)
export const SECRET_TOKEN_KEY = (() => {
    const SECRET_TOKEN_KEY = process.env.SECRET_TOKEN_KEY
    if (!SECRET_TOKEN_KEY || SECRET_TOKEN_KEY?.length < 30) {
        throw Error('No valid secret token key was providen.')
    }
    return SECRET_TOKEN_KEY
})()
