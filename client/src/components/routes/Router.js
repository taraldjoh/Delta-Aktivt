import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Landing from "../landing/Landing";
import Navbar from "../navbar/Navbar";

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/*" component={Navbar} />
            <Switch>
                <Route exact path="/" component={Landing} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
