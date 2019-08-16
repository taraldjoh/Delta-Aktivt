import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Logo from "../../images/Logo.png";
import RenderNavLinks from "../../lib/RenderNavLinks";

const Navbar = ({ history }) => {
    return (
        <StyledNav>
            <StyledContainer>
                <StyledLogo
                    src={Logo}
                    onClick={() => {
                        history.push("/");
                    }}
                    alt="brand-logo"
                />
                <RenderNavLinks />
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
