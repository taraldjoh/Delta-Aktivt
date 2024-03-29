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

    html {
        max-width: 100%;
        overflow-x: hidden;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Oswald', sans-serif;
        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;
        background: #fafafa;
        max-width: 100%;
        overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, a {
        margin: 0;
        padding: 0;
        margin-bottom: 1rem;
        color: #6DA39A;
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
        color: #0e0e0e;
        opacity: 0.85;
        font-size: 14px;
        line-height: 1.8;
    }

    a {
        text-decoration: none;
    }

    ul{
        list-style: none;
        padding: 0;
    }

    .clickable {
        cursor: pointer;
        @media screen and (min-width: 900px) {
            :hover::after {
            opacity: 0.5;
        }
        }
    }

    .noSelect {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
    }

    .button {
        border: none;
        padding: 1rem 5rem;
        margin: 3rem 0;
        color: #fff;
        font-size: 1rem;
        background-color: #158175;
        transition: all 0.2s ease-in-out;
        border-radius: 10px;
        -webkit-box-shadow: 0px 0px 20px -2px rgba(21, 129, 117, 1);
        -moz-box-shadow: 0px 0px 20px -2px rgba(21, 129, 117, 1);
        box-shadow: 0px 0px 20px -2px rgba(21, 129, 117, 1);
        :hover {
            cursor: pointer;
            background-color: #f98fa0;
            -webkit-box-shadow: 0px 0px 20px -2px rgba(249, 143, 160, 1);
            -moz-box-shadow: 0px 0px 20px -2px rgba(249, 143, 160, 1);
            box-shadow: 0px 0px 20px -2px rgba(249, 143, 160, 1);
        }
    }

    @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@media screen and (max-width: 768px ) {
    h1 {
        font-size: 1.5rem;
    }
}

`;
