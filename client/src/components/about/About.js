import React, { Fragment } from "react";
import styled from "styled-components";
import HeaderImage from "../common/HeaderImage";

import aboutheader from "../../images/about/aboutheader.png";
import SplitTextContainer from "../common/SplitTextContainer";
import Container from "../common/Container";
import { textLeft, textRight } from "./AboutText";
import AboutTeam from "./AboutTeam";
import Privacy from "../privacy/Privacy";
import Wrapper from "../common/Wrapper";

const About = () => {
    return (
        <Wrapper>
            <HeaderImage image={aboutheader} />
            <Container>
                <SplitTextContainer textLeft={textLeft} textRight={textRight} />
                <StyledHeader>vårt team</StyledHeader>
                <AboutTeam />
                <Privacy />
            </Container>
        </Wrapper>
    );
};

export default About;

const StyledHeader = styled.h1`
    color: #fff;
    margin: 0;
    background: #f98fa0;
    font-size: 4rem;
    padding: 4rem 0;
    position: relative;
    width: 100vw;
    left: calc(-50vw + 50%);
    text-transform: uppercase;

    @media screen and (max-width: 600px) {
        font-size: 2.5rem;
        padding: 2.5rem 0;
    }
`;
