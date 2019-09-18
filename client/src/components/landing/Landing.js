import React from "react";
import styled from "styled-components";
import LandingCarousel from "../carousel/LandingCarousel";
import Container from "../common/Container";
import RoundImage from "../common/RoundImage";
import Button from "../common/Button";

import round_1 from "../../images/picture_1.png";
import round_2 from "../../images/picture_2.png";
import round_3 from "../../images/picture_3.png";

import Wrapper from "../common/Wrapper";

const images = [
    {
        text: "trening",
        image: round_2,
        destination: "/exercise"
    },
    {
        text: "fysio",
        image: round_1,
        destination: "/activities"
    },
    {
        text: "tjenester",
        image: round_3,
        destination: "/services"
    }
];

const Landing = () => {
    const renderRoundImages = () => {
        return images.map((image, i) => {
            return (
                <RoundImage
                    key={`item-${i}`}
                    image={image.image}
                    text={image.text}
                    destination={image.destination}
                />
            );
        });
    };

    return (
        <Wrapper>
            <LandingCarousel />
            <Container>
                <StyledHeader>Bestill time hos oss nå</StyledHeader>
                <a
                    href="https://timebestilling.aspit.no/?fbclid=IwAR3NjTAjWkNTbqZkExkUOSf0gkSEKb511zyS0ljwIYDizz7TEppe0gR0HhQ#/p3547/main"
                    target="_blank"
                    rel="noopener nofreferrer"
                >
                    <Button text="Bestill time" />
                </a>
                <StyledImageContainer>
                    {renderRoundImages()}
                </StyledImageContainer>
            </Container>
        </Wrapper>
    );
};

export default Landing;

const StyledImageContainer = styled.div`
    height: 50vh;
    margin: 0 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        height: auto;
    }
`;

const StyledHeader = styled.h1`
    font-size: 3rem;
    text-transform: uppercase;
    margin-bottom: 2rem;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
`;
