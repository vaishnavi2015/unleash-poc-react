import axios from 'axios'

class HelloWorldService {

    retrieveHelloWorld() {
        //console.log('executed service')
        return axios.get(`http://localhost:8080/hello-world`, {headers: {
            'Origin': 'http://localhost:3001',
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsI…a-sKpnBvU5-QrPA9pwjfUzOs77X0t2Nj__ntqqCNNvEP2PrsQ'
        }}); 
    }

    retrieveJWTToken(){
        return axios.post(`http://localhost:8080/authenticate`, 
        {
            username:"in28minutes",
            password: 'dummy'
        },
        {headers: {
            'Origin': 'http://localhost:3001'
        }})
    }


}

export default new HelloWorldService()

