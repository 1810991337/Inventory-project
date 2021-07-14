import React from 'react'
import Iframe from 'react-iframe'
import './cart.css'
function cart() {
    return (
        <div className="home_page">
            
            
                <Iframe url="http://localhost:3001/"
                width="100%"
                height="800px"
                id="myId"
                className="frames"
                display="flex"
                position="relative"/>


           
        </div>
    )
}

export default cart