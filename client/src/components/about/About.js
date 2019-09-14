import React from "react";
import HeaderImage from "../common/HeaderImage";

import header from "../../images/picture_4.png";
import SplitTextContainer from "../common/SplitTextContainer";
import Container from "../common/Container";
import { textLeft, textRight } from "./AboutText";
import AboutTeam from "./AboutTeam";
import Wrapper from "../common/Wrapper";
import Title from "../common/Title";

const About = () => {
    return (
        <Wrapper>
            <HeaderImage image={header} text="OM OSS" />
            <Container>
                <SplitTextContainer textLeft={textLeft} textRight={textRight} />
                <Title text="Vårt Team" />
                <AboutTeam />
            </Container>
        </Wrapper>
    );
};

export default About;
