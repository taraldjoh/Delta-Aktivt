import React, { Fragment } from "react";
import styled from "styled-components";
import LandingCarousel from "../carousel/LandingCarousel";
import Container from "../common/Container";
import RoundImage from "../common/RoundImage";
import Button from "../common/Button";

import carousel_1 from "../../images/carousel_1.png";

const Landing = () => {
    return (
        <Fragment>
            <LandingCarousel />
            <Container>
                <StyledImageContainer>
                    <RoundImage image={carousel_1} text={"trening"} />
                    <RoundImage image={carousel_1} text={"fysio"} />
                    <RoundImage image={carousel_1} text={"bedrift"} />
                </StyledImageContainer>

                <StyledHeader>Bestill time hos oss nå</StyledHeader>
                <Button text="klikk her" destination="/about" />
            </Container>
        </Fragment>
    );
};

export default Landing;

const StyledImageContainer = styled.div`
    height: 50vh;
    margin: 0 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledHeader = styled.h1`
    font-size: 3rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
`;
