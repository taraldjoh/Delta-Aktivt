import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

import slider_1 from "../../images/landing/carousel/slider_1.png";
import slider_2 from "../../images/landing/carousel/slider_2.png";
import slider_3 from "../../images/landing/carousel/slider_3.png";

const carouselItems = [
    {
        image: slider_1,
        header: "Tjenester",
        text:
            "Fysioterapi, Gruppe trening, Individuell trening, Personlig trener og Bedfriftstrening - alt på samme sted med gode parkeringsmulighet.",
        path: "/services"
    },
    {
        image: slider_2,
        header: "Fokus",
        text:
            "Våre fysioterapeuter har fokus på trivsel, motiverende og tilrettelagt aktivitet og behandling. Vi er engasjerte og holder oss faglig oppdatert til enhver tid.",
        path: "/exercise"
    },
    {
        image: slider_3,
        header: "Helse og Trening",
        text:
            "På Kråmyra har vi flotte og lyse lokaler, med stor gruppetreningsal, treningsrom, behandlingsrom, venterom, toalett, garderober m/dusj, lite kjøkken med hvitevarer.",
        path: "/exercise"
    }
];

const LandingCarousel = ({ history }) => {
    const renderCarouselItems = () => {
        return carouselItems.map((items, i) => {
            return (
                <div key={`carousel-item-${i}`}>
                    <img src={items.image} alt={"qwe"} />
                    <StyledCaptionContainer>
                        <StyledHeader>{items.header}</StyledHeader>
                        <StyledP>{items.text}</StyledP>
                    </StyledCaptionContainer>
                    <StyledButton
                        onClick={() => {
                            history.push(`${items.path}`);
                        }}
                    >
                        Les Mer
                    </StyledButton>
                </div>
            );
        });
    };
    return (
        <Carousel
            showArrows={false}
            interval={7500}
            transitionTime={1750}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            className="noSelect"
        >
            {renderCarouselItems()}
        </Carousel>
    );
};

export default withRouter(LandingCarousel);

const StyledCaptionContainer = styled.div`
    background: #f7668b;
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
        font-size: 0.75rem;
    }

    @media screen and (max-width: 600) {
        display: none;
    }
`;

const StyledHeader = styled.p`
    color: #fff;
    font-weight: bold;
    font-size: 1.75rem;

    @media screen and (max-width: 1000px) {
        font-size: 0.75rem;
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
    background: #158175;
    color: #fff;
    text-align: center;
    font-size: 1.75rem;
    transition: 0.2s ease-in-out;
    border: 0;
    bottom: 50px;
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
