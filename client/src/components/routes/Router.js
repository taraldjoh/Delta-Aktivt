import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "../landing/Landing";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import About from "../about/About";
import Exercise from "../exercise/Exercise";
import Services from "../services/Services";
import Activities from "../activities/Activities";
import ScrollToTop from "../../lib/ScrollToTop";

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/*" component={Navbar} />
            <ScrollToTop />
            <Switch onUpdate={() => window.scrollTo(0, 0)}>
                <Route exact path="/" component={Landing} />
                <Route exact path="/about" component={About} />
                <Route exact path="/exercise" component={Exercise} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/activities" component={Activities} />
            </Switch>
            <Route path="/*" component={Footer} />
        </BrowserRouter>
    );
};

export default Router;
