import React from "react";
import styled from "styled-components";

const Header = ({ text }) => <StyledHeader>{text}</StyledHeader>;

export default Header;

const StyledHeader = styled.h1`
    padding: 2rem;
    border-bottom: 1px solid #000;
    color: #606060;
    font-weight: 600;
    margin-bottom: 4rem;
`;
