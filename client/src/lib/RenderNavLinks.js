import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

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

const RenderNavLinks = ({ match, history }) => {
    const activePath = match.url;

    const renderNavItems = () => {
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

    return <StyledUl>{renderNavItems()}</StyledUl>;
};

export default withRouter(RenderNavLinks);

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
