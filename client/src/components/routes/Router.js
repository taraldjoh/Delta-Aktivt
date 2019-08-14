import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "../landing/Landing";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import About from "../about/About";

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/*" component={Navbar} />

            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/about" component={About} />
            </Switch>
            <Route path="/*" component={Footer} />
        </BrowserRouter>
    );
};

export default Router;
