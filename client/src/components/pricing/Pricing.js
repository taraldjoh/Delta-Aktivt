import React from "react";
import styled from "styled-components";

import pricedProducts from "./pricedProducts";

const extraItems = [
    {
        name: "Kinesiotape (evt annen tape",
        price: "100,- per behandling"
    }
];

const Pricing = () => {
    const renderProducts = () => {
        return pricedProducts.map(item => {
            return (
                <StyledProductContainer>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                </StyledProductContainer>
            );
        });
    };

    const renderExtras = () => {
        return extraItems.map((item, i) => {
            return (
                <StyledProductContainer>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                </StyledProductContainer>
            );
        });
    };

    return (
        <StyledWrapper>
            <StyledTitle>Gjeldende fra 1. Januar 2017</StyledTitle>
            {renderProducts()}
            <StyledTitle>Tileggskostnader</StyledTitle>
            {renderExtras()}
        </StyledWrapper>
    );
};

export default Pricing;

const StyledWrapper = styled.div`
    margin: 0 5rem;
    padding: 0 3rem;
`;

const StyledTitle = styled.h2`
    font-weight: bold;
    color: #000;
    text-align: left;
`;

const StyledProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    span {
        transition: all 0.2s ease-in-out;
        font-size: 1.25rem;
    }

    :hover {
        span {
            color: #f7668b;

            cursor: default;
        }
    }
`;
