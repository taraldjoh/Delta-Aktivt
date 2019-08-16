import React from "react";
import Wrapper from "../common/Wrapper";
import HeaderImage from "../common/HeaderImage";
import Title from "../common/Title";

import header from "../../images/activities/header.png";
import Container from "../common/Container";

const Activities = () => {
    return (
        <Wrapper>
            <HeaderImage image={header} text="aktiviteter" />
            <Container>
                <Title text="Slyngekurs" />
                <Title text="Barnas mesterens mester" />
                <Title text="Bedriftenes mesterens mester" />
                <Title text="Kurs i løpsteknikk" />
            </Container>
        </Wrapper>
    );
};

export default Activities;
