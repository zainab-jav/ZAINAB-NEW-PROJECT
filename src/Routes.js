import React from 'react'
import {Route, Switch} from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register";
import Login from "./pages/Login";
import WishList from "./pages/WishList";
import ShoppingCart from './pages/ShoppingCart';
import CategoryHome from './pages/CategoryHome';




function Routes() {
    
    return (
        <Switch>
          
          <Route exact path="/" render={(props) => <Home {...props} /> } />
          <Route exact path="/createAccount" component={Register}/> 
          <Route exact path="/login" component={Login}/> 
          <Route exact path="/wishlist" component={WishList}/> 
          <Route exact path="/cart" render={(props) => <ShoppingCart {...props} /> } />
          <Route exact path="/" render={(props) => <CategoryHome {...props} /> } />
          
          
        </Switch>
    )
}

export default Routes
