import React from "react";
import styled from "styled-components";

import pricedProducts from "./pricedProducts";

const Pricing = () => {
    const renderProducts = () => {
        return pricedProducts.map(v => {
            return (
                <StyledProductContainer>
                    <span>{v.name}</span>
                    <span>{v.price}</span>
                </StyledProductContainer>
            );
        });
    };

    return (
        <StyledWrapper>
            <h2 style={{ textAlign: "left" }}>Gjeldende fra 1. Januar 2017</h2>
            {renderProducts()}
        </StyledWrapper>
    );
};

export default Pricing;

const StyledWrapper = styled.div`
    margin: 0 5rem;
    padding: 0 3rem;
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
            opacity: 0.75;
            cursor: default;
        }
    }
`;

const StyledProdu = styled.ul`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
