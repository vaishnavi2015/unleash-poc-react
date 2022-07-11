import React, { Component } from 'react'


const HeaderComponent = ({ userId }) => {
    return (
        <header>
                <div className="bg-light d-flex justify-content-between">
                    <div className="pull-left"><h1>Unleash Integration</h1></div>
                    <div className="pull-right"><h1>Hello {userId}</h1></div>
                </div>
        </header>
    )
}

export default HeaderComponent