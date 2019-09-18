import React from "react";
import Wrapper from "../common/Wrapper";
import HeaderImage from "../common/HeaderImage";

import header from "../../images/picture_2.png";
import Container from "../common/Container";
import PhysioMethods from "./PhysioMethods";
import Title from "../common/Title";
import Pricing from "../pricing/Pricing";

const Services = () => {
    return (
        <Wrapper>
            <HeaderImage image={header} text={"TJENESTER"} />
            <Container>
                <Title text="Vi benytter ulike fysikalske behandlingsmetoder" />
                <PhysioMethods />
                <Title text="Priser" />
                <Pricing />
            </Container>
        </Wrapper>
    );
};

export default Services;
