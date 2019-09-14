import React from "react";
import HeaderImage from "../common/HeaderImage";

import header from "../../images/picture_1.png";
import Schedule from "../schedule/Schedule";
import Container from "../common/Container";
import SplitTextContainer from "../common/SplitTextContainer";
import { textLeft, textRight } from "./IndividualTrainingText";
import GroupTraining from "./GroupTraining";
import Wrapper from "../common/Wrapper";

const Exercise = () => {
    return (
        <Wrapper>
            <HeaderImage image={header} text={"TRENING"} />
            <Container>
                <Schedule />
                <GroupTraining />
                <SplitTextContainer textLeft={textLeft} textRight={textRight} />
            </Container>
        </Wrapper>
    );
};

export default Exercise;
