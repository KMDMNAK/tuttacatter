import axios, { AxiosInstance } from 'axios'

export class Core {
    instace: AxiosInstance
    constructor(baseURL: string) {
        this.instace = this.getBaseConfig(baseURL)
    }
    private getBaseConfig(baseURL: string) {
        return axios.create({
            baseURL: "",
            timeout: 1000,
            headers: { 'content-type': 'application/json' }
        })
    }
}

