import axios from 'axios'
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
class AuthenticationService {
    
    registerSuccessfulLogin(username, password) {
        console.log('registerSuccessfulLogin..')
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
    }
    logout(){
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    }
    isUserLoggedIn(){
        return sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    }
    executeJWTAuthService(username, password) {
        return axios.post(`http://localhost:8080/authenticate`, 
        {
            'username':username,
            'password':password
        })
    }
    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
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
export default new AuthenticationService()