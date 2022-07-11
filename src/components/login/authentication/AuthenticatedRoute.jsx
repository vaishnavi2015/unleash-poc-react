import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService'
import {Routes, Route, useNavigate, useParams, Redirect, unstable_HistoryRouter, Navigate} from 'react-router-dom'
import Login from '../Login'

class AuthenticatedRoute extends Component {
    render() {
        if(AuthenticationService.isUserLoggedIn()) {
            return {...this.props.children}
        } else {
            return <Navigate to="/" /> 
        }
    }
}
export default AuthenticatedRoute;