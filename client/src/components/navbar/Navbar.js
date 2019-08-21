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

    const [currWidth, setCurrWidth] = useState(window.innerWidth);

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
                <StyledLi onClick={() => history.push(`${option.path}`)}>
                    {option.text}
                </StyledLi>
            );
        });
    };

    return (
        <StyledNav className="noSelect">
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
