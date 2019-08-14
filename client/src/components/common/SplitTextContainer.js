import React from "react";
import styled from "styled-components";

const SplitTextContainer = ({ textRight, textLeft }) => {
    return (
        <StyledDiv>
            <StyledLeftContainer>{textLeft}</StyledLeftContainer>
            <StyledRightContainer>{textRight}</StyledRightContainer>
        </StyledDiv>
    );
};

export default SplitTextContainer;

const StyledDiv = styled.div`
    display: flex;
    margin: 4rem 0;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const StyledLeftContainer = styled.div`
    text-align: right;
    padding: 2rem 3rem;
    width: 30%;
    border-right: 1px solid #000;

    @media screen and (max-width: 1000px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border: none;
        width: 100%;
        text-align: center;
        grid-gap: 1rem;
        padding: 0;
        border-bottom: 1px solid #000;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 400px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const StyledRightContainer = styled.div`
    width: 60%;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
        font-size: 1.15rem;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
        padding: 2rem 0;
        p {
            font-size: 1rem;
        }
    }
`;
