// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';

const App = () => {
    const [cartItems, setCartItems] = useState(0);

    return (
        <Router>
            <Header cartItems={cartItems} />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/productos" component={ProductList} />
                <Route path="/carrito" component={Cart} />
            </Switch>
        </Router>
    );
};

export default App;

