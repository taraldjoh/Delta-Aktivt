import React from "react";
import styled from "styled-components";

const Container = ({ children }) => (
    <StyledContainer>{children}</StyledContainer>
);

export default Container;

const StyledContainer = styled.div`
    margin: 5rem 5rem;
    padding: 0 1rem;
    text-align: center;
`;
