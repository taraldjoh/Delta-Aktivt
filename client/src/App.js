import React, { Fragment } from "react";
import Router from "./components/routes/Router";
import { createGlobalStyle } from "styled-components";

const App = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <Router />
        </Fragment>
    );
};

export default App;

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Oswald', sans-serif;
    }

    h1, h2, h3, h4, h5, a {
        margin: 0;
        padding: 0;
        margin-bottom: 1rem;
        color: #444444;
        font-family: 'Oswald', sans-serif;
        letter-spacing: 1px;
        font-weight: 400;
    }

    p, button, span, input {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
    }

    p {
        color: #757575;
        opacity: 0.85;
        font-size: 14px;
        line-height: 1.8;
    }

    a {
        text-decoration: none;
    }
`;