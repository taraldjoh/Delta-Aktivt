import React from "react";
import styled from "styled-components";

const Navbar = () => {
    return (
        <StyledNav>
            <ul>
                <li>LULW</li>
            </ul>
        </StyledNav>
    );
};

export default Navbar;

const StyledNav = styled.nav`
    width: 100%;
    position: sticky;
`;
