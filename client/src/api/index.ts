import { API } from './implement'
import { API_BASEURL, API_PREFIX } from '../env'

class Provider {
    private static api?: API
    static get API() {
        if (!this.api) this.api = new API(API_BASEURL, API_PREFIX)
        return this.api
    }
}
export default Provider