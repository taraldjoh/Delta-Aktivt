import React, { Fragment } from "react";
import styled from "styled-components";

import timeplan from "../../images/timeplan.jpg";

const Schedule = () => {
    return (
        <Fragment>
            <StyledTitleContainer>
                <StyledHeader>Timeplan House of Motion 2019</StyledHeader>
                <StyledImage src={timeplan} />
            </StyledTitleContainer>
            <StyledA
                href="/static/media/timeplan.64aaa259.jpg"
                download="timeplan.jpg"
            >
                Last ned timeplan
            </StyledA>
        </Fragment>
    );
};

export default Schedule;

const StyledHeader = styled.h1`
    color: #000;
    text-transform: uppercase;
`;

const StyledImage = styled.img`
    max-width: 70%;
`;

const StyledTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 3rem;
`;

const StyledA = styled.a`
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
`;
