import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Button = ({ text, destination, history }) => {
    return (
        <StyledButton
            onClick={() => {
                history.push(`${destination}`);
            }}
        >
            {text}
        </StyledButton>
    );
};

export default withRouter(Button);

const StyledButton = styled.button`
    border: none;
    padding: 1rem 5rem;
    color: #fff;
    font-size: 1rem;
    background-color: #7bdecb;
    transition: all 0.2s ease-in-out;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 20px -2px rgba(123, 222, 203, 1);
    -moz-box-shadow: 0px 0px 20px -2px rgba(123, 222, 203, 1);
    box-shadow: 0px 0px 20px -2px rgba(123, 222, 203, 1);
    :hover {
        cursor: pointer;
        background-color: #f98fa0;
        -webkit-box-shadow: 0px 0px 20px -2px rgba(249, 143, 160, 1);
        -moz-box-shadow: 0px 0px 20px -2px rgba(249, 143, 160, 1);
        box-shadow: 0px 0px 20px -2px rgba(249, 143, 160, 1);
    }
`;
