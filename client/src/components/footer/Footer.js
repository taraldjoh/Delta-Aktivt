import React from "react";
import styled from "styled-components";

const footerContent = [
    {
        content: (
            <ul>
                <li>Kråmyrvegen 3, 6007 Ålesund</li>
                <li>Org.nr. 911 574 861</li>
                <li>Telefon: 959 00 212</li>
                <li>
                    Mail:{" "}
                    <a href="mailto:ingrid@deltaaktivt.no">
                        ingrid@deltaaktivt.no
                    </a>
                </li>
            </ul>
        )
    },
    {
        content: (
            <ul>
                <li>Hello</li>
            </ul>
        )
    },
    {
        content: (
            <p>
                DELTA AKTIVT 2019 <br />© ALL RIGHTS RESERVED
            </p>
        )
    }
];

const Footer = () => {
    const renderFooterItems = () => {
        return footerContent.map((item, i) => {
            return (
                <StyledSection key={`footer-item-${i}`}>
                    {item.content}
                </StyledSection>
            );
        });
    };

    return (
        <StyledFooter>
            <StyledFooterContainer>{renderFooterItems()}</StyledFooterContainer>
        </StyledFooter>
    );
};

export default Footer;

const StyledFooter = styled.footer`
    background-color: #7bdecb;
    color: #fff;
    padding: 0 5rem;
`;

const StyledFooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledSection = styled.div``;
