import axios from 'axios'
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const JPA_API_URL = 'http://localhost:8080'
class UserService {
    createUser(user, token) {
        return axios.post(`${JPA_API_URL}/users`, user);
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}
export default new UserService()