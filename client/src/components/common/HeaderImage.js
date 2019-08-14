import React from "react";
import styled from "styled-components";

const HeaderImage = ({ image, text }) => <StyledDiv image={image} />;

export default HeaderImage;

const StyledDiv = styled.div`
    position: relative;
    height: 60vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    ::after {
        content: "";
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-image: url(${props => props.image});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        z-index: -1;
    }

    @media screen and (max-width: 600px) {
        height: 25vh;
    }
`;
