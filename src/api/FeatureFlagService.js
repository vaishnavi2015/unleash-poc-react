import axios from 'axios'
import { UNLEASH_PROXY_URL } from '../Constants'

class FeatureFlagService {

    retrieveEnabledFeatureFlags() {
        //console.log('executed service')
        return axios.get(`${UNLEASH_PROXY_URL}`, {headers: {
            'Authorization': 'some-secret'
          }}); 
    }
}

export default new FeatureFlagService()