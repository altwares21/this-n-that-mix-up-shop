import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Apparel from './pages/Apparel';
import Accessories from './pages/Accessories';
import Figures from './pages/Figures';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Collections from './pages/Collections';

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/product/:id" component={Product} /> {/* Dynamic Route */}
                    <Route path="/apparel" component={Apparel} />
                    <Route path="/accessories" component={Accessories} />
                    <Route path="/figures" component={Figures} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/collections" component={Collections} />
                </Switch>
            </Layout>
            <ToastContainer pauseOnHover={false} autoClose={1500} />
        </Router>
    );
};

export default App;