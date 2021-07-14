import React from 'react';
import axios from 'axios';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import StockEventsTable from './components/StockEventsTable';
import AddStockEvent from './components/AddStockEvent'
import AddProduct from './components/AddProduct'
import Nav from './components/Nav';
import './App.css';

//2 data types

//products

//fetch all stock events

//separate by different products

//display products

class App extends React.Component{
  state = {
    fetchedProducts: [],
    fetchedStockEvents: []
  }
  

  async componentDidMount(){
    const productRes =await axios({
      method: 'GET',
      url: 'http://localhost:1337/products'
    })

    const stockEventsRes =await axios({
      method: 'GET',
      url: 'http://localhost:1337/stockevents'
    })
    console.log("App.componentDidMount stockEventsRes", stockEventsRes)

    const fetchedProducts = productRes.data
    const fetchedStockEvents = stockEventsRes.data

    this.setState({fetchedProducts, fetchedStockEvents})
  }

  render(){
    console.log("App.render")
    const {fetchedProducts,fetchedStockEvents} = this.state;
    return (
      <div className="App">
        
        <BrowserRouter>
          <Nav />

          <Switch>
              <Route exact path="/stock/products">
              <AddProduct />
              </Route>
              <Route exact path="/stock/add">
                <AddStockEvent products = {fetchedProducts} />
              </Route>
              
          </Switch>

        </BrowserRouter>
      </div>
    );
  }
}


export default App;
