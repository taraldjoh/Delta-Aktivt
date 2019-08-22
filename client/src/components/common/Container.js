import React from "react";
import styled from "styled-components";

const Container = ({ children }) => (
    <StyledContainer>{children}</StyledContainer>
);

export default Container;

const StyledContainer = styled.div`
    margin: 5rem;
    padding: 0 1rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        margin: 1.5rem;
        padding: 2rem 1rem;
    }
`;
