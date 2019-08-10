import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Logo from "../../images/Logo.png";

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
        path: "/excercise",
        text: "Trening"
    },
    {
        path: "/physio",
        text: "Fysio"
    },
    {
        path: "/company",
        text: "Bedrift"
    }
];

const Navbar = ({ match, history }) => {
    const activePath = match.url;

    const renderOptions = () => {
        return options.map((option, i) => {
            return (
                <StyledLi
                    key={`nav-option-${i}`}
                    className={option.path === activePath ? "current" : null}
                    onClick={() => {
                        history.push(`${option.path}`);
                    }}
                >
                    {option.text}
                </StyledLi>
            );
        });
    };

    return (
        <StyledNav>
            <StyledContainer>
                <StyledLogo
                    src={Logo}
                    onClick={() => {
                        history.push("/");
                    }}
                />
                <StyledUl>{renderOptions()}</StyledUl>
            </StyledContainer>
        </StyledNav>
    );
};

export default withRouter(Navbar);

const StyledNav = styled.nav`
    width: 100%;
`;

const StyledContainer = styled.div`
    margin: 0 5rem;
    padding: 0 1rem;
    align-items: center;
    justify-content: space-between;
    display: flex;
`;

const StyledLogo = styled.img`
    height: 100px;
    :hover {
        cursor: pointer;
    }
`;

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    .current {
        color: #fc43d4;
    }
`;

const StyledLi = styled.li`
    color: #7bdecb;
    padding: 1rem;
    transition: 0.2s all ease-in-out;
    :hover {
        color: #fc43d4;
        cursor: pointer;
    }
`;
