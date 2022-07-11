import React, { useEffect } from 'react'
import './afterLogin.css'
import {BrowserRouter as Router, Route, Routes, useNavigate, useParams, useMatch} from 'react-router-dom'
import Home from '../pages/home/Home';
import NewProduct from '../pages/product/NewProduct';
import Product from '../pages/product/Product';
import ProductList from '../pages/productList/ProductList';
import UserList from '../pages/userList/UserList';
import NewUser from '../pages/users/NewUser';
import User from '../pages/users/User';
import Sidebar from '../sidebar/Sidebar';
import Topbar from '../topbar/Topbar';
import {useUnleashContext, useFlag, useVariant} from '@unleash/proxy-client-react';

export default function AfterLogin() {
    const params = useParams()
    const userId = params.username
    const navigate = useNavigate();
    const updateContext = useUnleashContext()
    
    // console.log('url inside afterlogin', url)
    useEffect(() => {
        // console.log('userId=>>', userId)
        updateContext({ userId })
        navigate(`home`)
    }, [])
  return (
    <div>
        <Topbar/>
        <div className='container'>
            <Sidebar/>
            <Routes>
                <Route path="home" element={<Home/>} />
                <Route path="users" element={<UserList />} />
                <Route path="products" element={<ProductList />} />
                <Route path="products/:productId" element={<Product />} />
                <Route path="users/:userId" element={<User />} />
                <Route path="newproduct" element={<NewProduct />} />
                <Route path="newuser" element={<NewUser />} />
                {/* <Route path="/error" element={<Error/>}/> */}
            </Routes>
        </div>
    </div>
  )
}
