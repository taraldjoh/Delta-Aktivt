import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const RoundImage = ({ image, text, destination, history }) => {
    return (
        <StyledDiv
            image={image}
            onClick={
                destination
                    ? () => {
                          history.push(`${destination}`);
                      }
                    : null
            }
            className={destination ? "clickable" : null}
        >
            <StyledText>{text}</StyledText>
        </StyledDiv>
    );
};

export default withRouter(RoundImage);

const StyledDiv = styled.div`
    position: relative;
    height: 250px;
    width: 250px;
    min-width: 250px;
    min-height: 250px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    -webkit-box-shadow: 5px 5px 10px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 5px 5px 10px -5px rgba(0, 0, 0, 0.75);
    box-shadow: 5px 5px 10px -5px rgba(0, 0, 0, 0.75);
    ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-image: url(${props => props.image});
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
        opacity: 1;
        transition: opacity 300ms;
    }
`;

const StyledText = styled.p`
    color: #fff;
    opacity: 1;
    font-size: 2rem;
`;
