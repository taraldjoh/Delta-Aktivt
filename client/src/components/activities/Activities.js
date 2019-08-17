import React from "react";
import Wrapper from "../common/Wrapper";
import HeaderImage from "../common/HeaderImage";
import Title from "../common/Title";

import header from "../../images/activities/header.png";
import Container from "../common/Container";
import {
    slyngeKurs,
    barnasMesterensMester,
    bedriftMesterenesMester,
    kursLøpeteknik
} from "./ActivitiesText";

const Activities = () => {
    return (
        <Wrapper>
            <HeaderImage image={header} text="aktiviteter" />
            <Container>
                <Title text="Slyngekurs" />
                {slyngeKurs}
                <Title text="Barnas mesterens mester" />
                {barnasMesterensMester}
                <Title text="Bedriftenes mesterens mester" />
                {bedriftMesterenesMester}
                <Title text="Kurs i løpsteknikk" />
                {kursLøpeteknik}
            </Container>
        </Wrapper>
    );
};

export default Activities;
