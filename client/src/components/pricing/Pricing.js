import React from "react";
import styled from "styled-components";

const pricedProducts = [
    {
        name: "Massasje i bedrift",
        price: "350,-"
    },
    {
        name: "Førstegangskonsultasjon (m/undersøkelse)",
        price: "600,-"
    },
    {
        name: "Fysikalsk behandling inntil 45 min",
        price: "450,-"
    },
    {
        name: "Massasje 30 min",
        price: "400,-"
    },
    {
        name: "Massasje 60 min",
        price: "700,-"
    },
    {
        name: "Trykkbølgebehandling",
        price: "550,-"
    },
    {
        name: "Personlig trening førstegangskonsultasjon",
        price: "750,-"
    },
    {
        name: "Personlig trening 60 min",
        price: "550,-"
    },
    {
        name: "Maxpulstest",
        price: "500,-"
    },
    {
        name: "Fotanalyse og individuell tilpasning av Formthotics såler",
        price: "1400,-"
    }
];

const extraItems = [
    {
        name: "Kinesiotape (evt annen tape)"
    },
    {
        name: "Nålebehandling"
    }
];

const terms = [
    "Ubenyttede timer som ikke er avbestilt senest 24 timer i forkant av oppsatt time, må dessverre betales i sin helhet.",
    "Fysioterapeutene i Delta Aktivt har ikke driftsavtale med kommunen, og pasientene trenger derfor ikke rekvisisjon fra lege. Vi har kort venteliste, og kan garantere behandling innen 3 virkedager."
];

const Pricing = () => {
    const renderProducts = () => {
        return pricedProducts.map((item, i) => {
            return (
                <StyledProductContainer key={`item-key${i}`}>
                    <StyledSpan>{item.name}</StyledSpan>
                    <StyledSpan>{item.price}</StyledSpan>
                </StyledProductContainer>
            );
        });
    };

    const renderExtras = () => {
        return extraItems.map((item, i) => {
            return (
                <StyledProductContainer key={`item-key${i}`}>
                    <StyledSpan>{item.name}</StyledSpan>
                </StyledProductContainer>
            );
        });
    };

    const renderTerms = () => {
        return terms.map((term, i) => {
            return (
                <StyledTermContainer key={`item-key${i}`}>
                    <StyledSpan>{term}</StyledSpan>
                </StyledTermContainer>
            );
        });
    };

    return (
        <StyledWrapper>
            <StyledTitle>Gjeldende fra 1. Januar 2019</StyledTitle>
            {renderProducts()}
            <StyledTitle>Tilegg</StyledTitle>
            {renderExtras()}
            {renderTerms()}
        </StyledWrapper>
    );
};

export default Pricing;

const StyledWrapper = styled.div`
    margin: 0 5rem;
    padding: 0 3rem;
    text-align: left;

    @media screen and (max-width: 768px) {
        margin: 0;
        padding: 0;
    }
`;

const StyledTitle = styled.h2`
    font-weight: bold;
    color: #000;
    text-align: left;
    margin: 3rem 0;
    @media screen and (max-width: 768px) {
        margin: 1rem 0;
    }
`;

const StyledProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    :hover {
        span {
            color: #f7668b;

            cursor: default;
        }
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        span:first-child {
            margin-bottom: 0.35rem;
        }
    }
`;

const StyledSpan = styled.span`
    transition: all 0.2s ease-in-out;
    font-size: 1.25rem;
`;

const StyledTermContainer = styled.div`
    margin: 2rem 0;
`;
