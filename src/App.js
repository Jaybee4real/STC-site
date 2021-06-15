import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

import "./index.scss";

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    const [cartItems, setCartItems] = useState([]);
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(props) => (
                        <Home cartItems={cartItems} setCartItems={setCartItems} />
                    )}
                ></Route>
                <Route
                    exact
                    path="/checkout"
                    render={(props) => (
                        <Checkout cartItems={cartItems} setCartItems={setCartItems} />
                    )}
                ></Route>
            </Switch>
        </Router>
    );
}

export default App;
