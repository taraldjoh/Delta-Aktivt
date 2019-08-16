import React from "react";
import HeaderImage from "../common/HeaderImage";

import aboutheader from "../../images/about/aboutheader.png";
import SplitTextContainer from "../common/SplitTextContainer";
import Container from "../common/Container";
import { textLeft, textRight } from "./AboutText";
import AboutTeam from "./AboutTeam";
import Privacy from "../privacy/Privacy";
import Wrapper from "../common/Wrapper";
import Title from "../common/Title";

const About = () => {
    return (
        <Wrapper>
            <HeaderImage image={aboutheader} text="OM OSS" />
            <Container>
                <SplitTextContainer textLeft={textLeft} textRight={textRight} />
                <Title text="Vårt Team" />
                <AboutTeam />
                <Privacy />
            </Container>
        </Wrapper>
    );
};

export default About;
