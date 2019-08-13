import React from "react";
import styled from "styled-components";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import carousel_1 from "../../images/carousel_1.png";
import "./Carousel.css";

const carouselItems = [
    {
        image: carousel_1,
        header: "Item One",
        text:
            "motsetning til hva mange tror, er ikke Lorem Ipsum bar tilfeldig tekst. Dets røtter springer helt tilbake til et stykke klassisk latinsk litteratur fra 45 år f.kr."
    },
    {
        image: carousel_1,
        header: "Item Two",
        text:
            "motsetning til hva mange tror, er ikke Lorem Ipsum bar tilfeldig tekst. Dets røtter springer helt tilbake til et stykke klassisk latinsk litteratur fra 45 år f.kr."
    }
];

const LandingCarousel = () => {
    const renderCarouselItems = () => {
        return carouselItems.map((items, i) => {
            return (
                <div key={`carousel-item-${i}`}>
                    <img src={carousel_1} />
                    <StyledCaptionContainer>
                        <StyledHeader>{items.header}</StyledHeader>
                        <StyledP>{items.text}</StyledP>
                    </StyledCaptionContainer>
                    <StyledButton>Les Mer</StyledButton>
                </div>
            );
        });
    };
    return (
        <Carousel
            showArrows={false}
            interval={5000}
            transitionTime={1750}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
        >
            {renderCarouselItems()}
        </Carousel>
    );
};

export default LandingCarousel;

const StyledCaptionContainer = styled.div`
    background: #f98fa0;
    position: absolute;
    z-index: 2;
    bottom: 50px;
    padding: 1rem 2rem;
    text-align: left;
    width: 45%;
    -webkit-box-shadow: 0px 0px 20px -2px rgba(249, 143, 160, 1);
    -moz-box-shadow: 0px 0px 20px -2px rgba(249, 143, 160, 1);
    box-shadow: 0px 0px 20px -2px rgba(249, 143, 160, 1);

    @media screen and (max-width: 1000px) {
        width: 70%;
    }
`;

const StyledHeader = styled.h5`
    color: #fff;
    font-weight: bold;
    font-size: 1.75rem;

    @media screen and (max-width: 1000px) {
        font-size: 1.25rem;
    }
`;

const StyledP = styled.p`
    color: #fff;
`;

const StyledButton = styled.button`
    position: absolute;
    height: 150px;
    width: 150px;
    right: 150px;
    border-radius: 50%;
    background: #7bdecb;
    color: #fff;
    text-align: center;
    font-size: 1.75rem;
    transition: 0.2s ease-in-out;
    border: 0;
    bottom: 50px;

    -webkit-box-shadow: 0px 0px 20px -2px rgba(123, 222, 203, 1);
    -moz-box-shadow: 0px 0px 20px -2px rgba(123, 222, 203, 1);
    box-shadow: 0px 0px 20px -2px rgba(123, 222, 203, 1);

    :hover {
        cursor: pointer;
        background-color: #68bdac;
        -webkit-box-shadow: 0px 0px 20px -2px rgba(104, 189, 172, 1);
        -moz-box-shadow: 0px 0px 20px -2px rgba(104, 189, 172, 1);
        box-shadow: 0px 0px 20px -2px rgba(104, 189, 172, 1);
    }
    :focus {
        outline: 0;
    }

    @media screen and (max-width: 1000px) {
        height: 100px;
        width: 100px;
        right: 50px;
        font-size: 1rem;
    }
`;
