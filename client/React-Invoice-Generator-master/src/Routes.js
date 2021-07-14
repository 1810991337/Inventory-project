import React from 'react'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import PaymentStatus from './PaymentStatus'
import Appp from './Appp'
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Appp}/>
                <Route exact path="/status/:orderId" component={PaymentStatus} />
            </Switch>
        </Router>
    )
}

export default Routes