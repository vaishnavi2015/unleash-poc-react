import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
// import '../../bootstrap.css'
import './login.css'
import AuthenticationService from './authentication/AuthenticationService';
import HelloWorldService from '../helloworld/HelloWorldService';
import loginlogo from '../../images/loginlogo.png'
export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
    const [hasLoginFailed, setHasLoginFailed] = React.useState(false);
    const handleUsername=(event) =>{
        setUsername(event.target.value)
        console.log('username=>', username)
    }
    const handlePassword=(event) =>{
        setPassword(event.target.value)
        console.log('password=>', password)
    }

    const loginClicked=(event)=> {
        
        // HelloWorldService.retrieveJWTToken()
        // .then(response => {
        //     console.log('retrieveJWTToken=>',response.data)
        // })

        // HelloWorldService.retrieveHelloWorld()
        // .then(response => {
        //     console.log('retrieveHelloWorld',response)
        // })

        
        // .catch(error => console.log(error))
        if(password==='dummy') {
            AuthenticationService.registerSuccessfulLogin(username, password)
            setShowSuccessMessage(true)
            setHasLoginFailed(false)
            navigate(`/loggedin/${username}`)
            console.log('successful');
        } else {
            setShowSuccessMessage(false)
            setHasLoginFailed(true)
            console.log('failed');
        }

        // AuthenticationService
        //     .executeJWTAuthService(username, password)
        //     .then((response) => {
        //         console.log('response=>', response)
        //         AuthenticationService.registerSuccessfulLoginForJwt(username, response.data.token)
        //         navigate(`/loggedin/${username}`)
        //     }).catch(() => {
        //         setShowSuccessMessage(false)
        //         setHasLoginFailed(true)
        //     })
    }
  return (
    <div className='parentContainer'>
    
        <div className='headerContainer'>
            <div className='topLeft'>
                <img src={loginlogo} className='logo'></img>
            </div>
        </div>
        <div className='loginContainer' align="center">
            {hasLoginFailed && <div className='alert alert-warning'>Invalid Credentials</div>}
            <div className='credential'>
                <div className="loginText">Login</div>
                <div class="needs-validation">
                    <div class="form-group usernameForm">
                        <label className='usernameLabel' for="uname">Username:</label>
                        <input type="text" className="username form-control" id="uname" placeholder="Enter username" name="username" value={username} onChange={handleUsername} required/>
                    </div>
                    <div class="form-group passwordForm">
                        <label className='passwordLabel' for="pwd">Password:</label>
                        <input type="password" className="password form-control" id="pwd" placeholder="Enter password" name="password" value={password} onChange={handlePassword} required/>
                    </div>
                    <div class="form-group forgotPassword" >
                        <label class="form-check-label">
                            <a href="">Forgot email address or password?</a>
                        </label>
                    </div>
                    <button className='loginButton btn btn-primary' onClick={loginClicked}>Log In</button> 
                    {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                </div>
                {/* <div className='username'><span className='usernameLabel'>Username:</span> <input type="text" name="username" value={username} onChange={handleUsername}/></div>
                <div className='password'><span className='passwordLabel'>Password:</span> <input type="password" name="password" value={password} onChange={handlePassword}/></div>
                <button className='loginButton' onClick={loginClicked}>Login</button> */}
            </div>
        </div>
        <div className="footer">
        </div>
    </div>
  )
}
