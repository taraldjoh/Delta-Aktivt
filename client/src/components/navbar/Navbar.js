import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Logo from "../../images/Logo.png";
import { X, Menu } from "react-feather";

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

const Navbar = ({ match, history }) => {
    const limit = 1000;
    const scrollBreak = 25;
    const currPath = match.url;

    const [active, setActive] = useState(false);
    const [currWidth, setCurrWidth] = useState(window.innerWidth);
    const [currPos, setCurrPos] = useState(window.scrollY);

    const updateScrollY = () => {
        setCurrPos(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", updateScrollY);
        return () => {
            window.removeEventListener("scroll", updateScrollY);
        };
    }, []);

    const updateWidth = () => {
        setCurrWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, []);

    const goTo = path => {
        history.push(path);
        setActive(false);
    };

    const renderOptions = () => {
        return options.map((option, i) => {
            return (
                <StyledLi
                    key={`nav-item-${i}`}
                    onClick={() => goTo(`${option.path}`)}
                    className={option.path === currPath ? "current" : null}
                >
                    {option.text}
                </StyledLi>
            );
        });
    };

    const renderMobileMenu = () => {
        if (!active) return;

        return (
            <StyledWrapper active={active}>
                <StyledNavItemContainer>
                    {renderOptions()}
                </StyledNavItemContainer>
            </StyledWrapper>
        );
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
                    <Fragment>
                        <StyledTrigger
                            onClick={() => setActive(!active)}
                            tabIndex="0"
                            active={active}
                        >
                            {active ? <X size={35} /> : <Menu size={35} />}
                        </StyledTrigger>
                        {renderMobileMenu()}
                    </Fragment>
                ) : (
                    <StyledUl>{renderOptions()}</StyledUl>
                )}
            </StyledContainer>
        </StyledNav>
    );
};

export default withRouter(Navbar);

const StyledNavItemContainer = styled.ul`
    display: flex;
    flex-direction: column;
`;

const StyledTrigger = styled.div`
    top: 35px;
    right: 10px;
    cursor: pointer;
    position: absolute;
    color: #158175;
`;

const StyledWrapper = styled.div`
    display: ${({ active }) => (active ? "block" : "none")};
    transition: opacity 0.2s ease-in-out;
`;

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

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        margin: 0 2rem;
    }

    .current {
        color: #d500b0;
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
