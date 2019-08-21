import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Logo from "../../images/Logo.png";
import RenderNavLinks from "./RenderNavLinks";
import NavMobile from "./NavMobile";

const options = [
    {
        path: "/",
        text: "Hjem"
    },
    {
        path: "/about",
        text: "Om Oss"
    },
    {
        path: "/exercise",
        text: "Trening"
    },
    {
        path: "/services",
        text: "Tjenester"
    },
    {
        path: "/activities",
        text: "Aktiviteter"
    }
];

const Navbar = ({ history }) => {
    const limit = 1000;
    const scrollBreak = 50;

    const [currWidth, setCurrWidth] = useState(window.innerWidth);
    const [currPos, setCurrPos] = useState(window.scrollY);
    console.log(currPos);

    useEffect(() => {
        window.addEventListener("scroll", updateScrollY);
        return () => {
            window.removeEventListener("scroll", updateScrollY);
        };
    }, []);

    const updateScrollY = () => {
        setCurrPos(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, []);

    const updateWidth = () => {
        setCurrWidth(window.innerWidth);
    };

    const renderOptions = () => {
        return options.map((option, i) => {
            return (
                <StyledLi
                    key={`nav-item-${i}`}
                    onClick={() => history.push(`${option.path}`)}
                >
                    {option.text}
                </StyledLi>
            );
        });
    };

    return (
        <StyledNav
            className="noSelect"
            style={
                currPos <= scrollBreak
                    ? { position: "relative" }
                    : { position: "fixed" }
            }
        >
            <StyledContainer>
                <StyledLogo
                    src={Logo}
                    onClick={() => {
                        history.push("/");
                    }}
                    alt="brand-logo"
                />
                {currWidth <= limit ? (
                    <NavMobile />
                ) : (
                    <StyledUl>{renderOptions()}</StyledUl>
                )}
            </StyledContainer>
        </StyledNav>
    );
};

export default withRouter(Navbar);

const StyledNav = styled.nav`
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1020;
    background-color: #fff;
`;

const StyledContainer = styled.div`
    margin: 0 5rem;
    padding: 0 1rem;
    align-items: center;
    justify-content: space-between;
    display: flex;

    @media screen and (max-width: 850px) {
        flex-direction: column;
        margin: 0 2rem;
    }
`;

const StyledLogo = styled.img`
    height: 100px;
    :hover {
        cursor: pointer;
    }
`;

const StyledLi = styled.li`
    color: #158175;
    padding: 1rem;
    font-size: 1.25rem;
    letter-spacing: 1.25;
    transition: 0.2s all ease-in-out;
    :hover {
        color: #d500b0;
        cursor: pointer;
    }
`;

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    .current {
        color: #d500b0;
    }
`;
