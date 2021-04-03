
const PREFIX = "/api"
class RouteProvider {
    static login() {
        return { route: PREFIX + '/auth/login', method: 'POST' }
    }
    static register() {
        return { route: PREFIX + '/auth/register', method: 'POST' }
    }
}
