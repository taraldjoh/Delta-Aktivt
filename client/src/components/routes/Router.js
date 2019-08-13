import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "../landing/Landing";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/*" component={Navbar} />

            <Switch>
                <Route exact path="/" component={Landing} />
            </Switch>
            <Route path="/*" component={Footer} />
        </BrowserRouter>
    );
};

export default Router;
