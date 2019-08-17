import React, { Fragment } from "react";
import styled from "styled-components";
// import { ChevronLeft } from "react-feather";
import Button from "../common/Button";

import timeplan from "../../images/exercise/timeplan.jpg";

const Schedule = () => {
    return (
        <Fragment>
            <StyledTitleContainer>
                {/* <StyledCircle>
                    <ChevronLeft size={80} />
                </StyledCircle> */}
                <StyledHeader>Timeplan House of Motion 2019</StyledHeader>
                <StyledImage src={timeplan} />
            </StyledTitleContainer>
            <Button text={"Last ned timeplan"} destination={"/"} />
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

// const StyledCircle = styled.div`
//     background-color: #87e2d5;
//     border-radius: 50%;
//     left: 100px;
//     position: absolute;
//     height: 150px;
//     width: 150px;
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     svg {
//         color: #fff;
//     }
// `;

const StyledTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* height: 150px; */
    margin-bottom: 3rem;
`;
