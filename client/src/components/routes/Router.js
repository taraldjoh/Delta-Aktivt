import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "../landing/Landing";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import About from "../about/About";
import Exercise from "../exercise/Exercise";

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/*" component={Navbar} />

            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/about" component={About} />
                <Route exact path="/exercise" component={Exercise} />
            </Switch>
            <Route path="/*" component={Footer} />
        </BrowserRouter>
    );
};

export default Router;
