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

        return <h1>hello</h1>;
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
    position: fixed;
    z-index: 1020;
    top: 0;
    right: 0;
`;

const StyledTrigger = styled.div`
    position: fixed;
    top: 40px;
    right: 10px;
    cursor: pointer;
`;
