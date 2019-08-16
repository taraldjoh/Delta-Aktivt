import React, { Fragment } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { Facebook, Instagram } from "react-feather";

const Footer = ({ history }) => {
    const footerContent = [
        {
            content: (
                <StyledUl className={"sectionOne"}>
                    <li>Kråmyrvegen 3, 6007 Ålesund</li>
                    <li>Org.nr. 911 574 861</li>
                    <li>Telefon: 959 00 212</li>
                    <li>Mail: ingrid@deltaaktivt.no</li>
                </StyledUl>
            )
        },
        {
            content: (
                <Fragment>
                    <div className={"sectionTwo"}>
                        <StyledUl>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://www.facebook.com"
                                >
                                    <Facebook size={50} />
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://www.instagram.com"
                                >
                                    <Instagram size={50} />
                                </a>
                            </li>
                        </StyledUl>
                        <p>@deltaaktivt</p>
                    </div>
                </Fragment>
            )
        },
        {
            content: (
                <StyledUl className={"sectionThree"}>
                    <li>DELTA AKTIVT 2019</li>
                    <li>ALL RIGHTS RESERVED</li>
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
`;

const StyledFooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 2rem;
    padding: 0 1rem;
    height: 100%;
`;

const StyledSection = styled.div`
    height: 100%;
    display: flex;
    align-items: center;

    .sectionOne {
        flex-direction: column;
    }
    .sectionTwo {
        li {
            margin: 0 0.75rem;
        }

        a {
            color: #fff;
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
`;

const StyledUl = styled.ul`
    margin: 0;
    display: flex;
`;
