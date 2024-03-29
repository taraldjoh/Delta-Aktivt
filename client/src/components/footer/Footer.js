import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Footer = () => {
    const footerContent = [
        {
            content: (
                <StyledUl className={"sectionOne"}>
                    <li>Kråmyrvegen 3, 6007 Ålesund</li>
                    <li>Telefon: 469 08 316</li>
                    <li>
                        Mail:{" "}
                        <StyledA href="mailto:lise@deltaaktivt.no">
                            lise@deltaaktivt.no
                        </StyledA>
                    </li>
                    <li>Org.nr. 911 574 861</li>
                </StyledUl>
            )
        },
        {
            content: (
                <StyledUl className={"sectionThree"}>
                    <li>DELTA AKTIVT 2019</li>
                    <li>ALL RIGHTS RESERVED</li>
                    <li>
                        <StyledA
                            href="http://www.deltaaktivt.no/gdpr/PERSONVERNERKLÆRING%20for%20Delta%20Aktivt%20AS.pdf"
                            target="_blank"
                        >
                            PERSONVÆRNSERKLÆRING
                        </StyledA>
                    </li>
                </StyledUl>
            )
        }
    ];
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
        <StyledFooter className={"noSelect"}>
            <StyledFooterContainer>{renderFooterItems()}</StyledFooterContainer>
        </StyledFooter>
    );
};

export default withRouter(Footer);

const StyledFooter = styled.footer`
    background-color: #158175;
    color: #fff;
    height: 150px;
    @media screen and (max-width: 550px) {
        height: 100%;
    }
`;

const StyledFooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 5rem;
    padding: 0 1rem;
    height: 100%;

    @media screen and (max-width: 750px) {
        margin: 0 0.5rem;
    }
    @media screen and (max-width: 550px) {
        flex-direction: column;
        padding: 2rem 1rem;
        justify-content: center;
        align-items: center;
    }
`;

const StyledSection = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    a {
        color: #fff;
    }

    li {
        margin: 0.15rem 0;
    }

    .sectionOne {
        flex-direction: column;
    }
    .sectionTwo {
        li {
            margin: 0 0.75rem;
        }

        p {
            margin-top: 0.25rem;
            color: #fff;
            text-align: center;
        }

        svg {
            transition: all 0.2s ease-in-out;
        }
        svg:hover {
            cursor: pointer;
            color: #f98fa0;
        }
    }
    .sectionThree {
        flex-direction: column;
        text-align: right;
    }

    @media screen and (max-width: 550px) {
        padding: 1rem 0;
        .sectionThree,
        .sectionOne {
            text-align: center;
        }
    }
`;

const StyledUl = styled.ul`
    margin: 0;
    display: flex;

    
`;

const StyledA = styled.a`
    :hover {
        color: #f98fa0;
        cursor: pointer;
        text-decoration: underline;
    }
`;
