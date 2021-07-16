import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Footer from "./components/Footer";




const App = () => {
  return (

    <>
      <Router>
        <Provider store={store} >
          <Navbar />
      <div className="All_component_heandler">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/details/:id" component={Detail} />
          </Switch>
      </div>
        </Provider>
          <Footer />
      </Router>
    </>
  );
};

export default App;
