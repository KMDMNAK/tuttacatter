import { Core } from './core'

export class API {
    private core: Core
    private apiPrefix: string
    constructor(baseUrl: string, apiPrefix: string) {
        this.core = new Core(baseUrl)
        this.apiPrefix = apiPrefix
    }
    public login(data: API.Login.RequestBody) {
        return this.core.instace.post(this.apiPrefix + '/auth/login', data)
    }
    public register(data: API.Register.RequestBody) {
        return this.core.instace.post(this.apiPrefix + '/auth/register', data)
    }
}
