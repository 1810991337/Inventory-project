import React from 'react'
import Iframe from 'react-iframe'
import './cart.css'
function invoice() {
    return (
        <div className="home_page">
            
            
                <Iframe url="http://localhost:3002/"
                width="100%"
                height="1000px"
                overflow="hidden"
                margin-left="0px"
                id="myId"
                className="frames"
                display="flex"
                position="relative"/>


           
        </div>
    )
}

export default invoice