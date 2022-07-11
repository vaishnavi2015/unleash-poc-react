import React, {useEffect } from 'react';
import './App.css';
import ReactGA from 'react-ga';
import FeatureFlagApp from './components/featureflag/FeatureFlagApp';
import './App.css';
// import './bootstrap.css';
import { USER_ID } from './Constants'

import Home from './components/pages/home/Home'
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom'
import { Switch } from '@material-ui/core';
import UserList from './components/pages/userList/UserList';
import Login from './components/login/Login';
import Error from './components/pages/errors/Error';
import withParams from './components/withParams';
import AfterLogin from './components/login/AfterLogin';
import AuthenticatedRoute from './components/login/authentication/AuthenticatedRoute';
import AuthenticationService from './components/login/authentication/AuthenticationService';
const App = (props)=> {
  const TRACKING_ID = "UA-230501120-1"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  // if(!AuthenticationService.isUserLoggedIn()) {
  //     return <Login />
  // } 

  return (
    <div>
      {/* <FeatureFlagApp userId={USER_ID}/> */}
      
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/loggedin/:username/*" element={
                    <AuthenticatedRoute>
                      <AfterLogin />
                    </AuthenticatedRoute>
                } /> 
            </Routes>
        </Router>
    </div>
  );
}

export default App;
