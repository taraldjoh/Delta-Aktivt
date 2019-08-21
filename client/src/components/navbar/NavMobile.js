import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { X, Menu } from "react-feather";

const NavMobile = ({ history }) => {
    const [active, setActive] = useState(false);

    const goTo = path => {
        history.pushState(path);
        setActive(false);
    };

    const renderMenu = () => {
        if (!active) return null;

        return (
            <StyledWrapper active={active}>
                <StyledBg onClick={() => setActive(false)} />
            </StyledWrapper>
        );
    };

    return (
        <StyledNavContainer>
            <StyledTrigger
                onClick={() => setActive(!active)}
                tabIndex="0"
                active={active}
            >
                {active ? <X size={35} /> : <Menu size={35} />}
            </StyledTrigger>
            {renderMenu()}
        </StyledNavContainer>
    );
};

export default withRouter(NavMobile);

const StyledNavContainer = styled.div`
    z-index: 1020;
    top: 0;
    right: 0;
`;

const StyledTrigger = styled.div`
    top: 40px;
    right: 10px;
    cursor: pointer;
`;

const StyledWrapper = styled.div`
    display: ${({ active }) => (active ? "block" : "none")};
`;

const StyledBg = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 99;
    animation: all 0.4s ease-in-out;
`;
