import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomeComponent from './HomeComponent.js';
import ContactUs from './ContactUs';
import About from './About';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import Form from './signup/Form'
import FeatureFlag from './FeatureFlag.jsx';

const FeatureFlagApp = ({userId}) => {
        return (
            <div className="FeatureFlagApp">
                {/* <HeaderComponent userId={userId}/> */}
                <Router>
                    <Routes>
                        <Route path="/" element={<HomeComponent userId={userId}/>} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contactUs" element={<ContactUs />} />
                        <Route path="/flag" element={<FeatureFlag/>} />
                        <Route path="/signup/halifax" element={<Form userId={userId} brand={'halifax'}/>} />
                        <Route path="/signup/mbna" element={<Form userId={userId} brand={'mbna'}/>} />
                    </Routes>
                </Router>
                {/* <FooterComponent userId={userId}/> */}
            </div>
        )
}

export default FeatureFlagApp