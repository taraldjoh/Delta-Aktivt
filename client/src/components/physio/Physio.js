import React from "react";
import styled from "styled-components";
import Wrapper from "../common/Wrapper";
import HeaderImage from "../common/HeaderImage";

import aboutheader from "../../images/about/aboutheader.png";
import Container from "../common/Container";
import PhysioMethods from "./PhysioMethods";
import Title from "../common/Title";
import SplitTextContainer from "../common/SplitTextContainer";
import { textLeft, textRight } from "./TreatmentOfferText";
import Pricing from "../pricing/Pricing";

const Physio = () => {
    return (
        <Wrapper>
            <HeaderImage image={aboutheader} />
            <Container>
                <PhysioMethods />
                <Title text="Priser" />
                <Pricing />
            </Container>
        </Wrapper>
    );
};

export default Physio;
