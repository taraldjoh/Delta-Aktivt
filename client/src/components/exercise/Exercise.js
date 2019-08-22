import React from "react";
import HeaderImage from "../common/HeaderImage";

import treningsheader from "../../images/exercise/treningheader.png";
import Schedule from "../schedule/Schedule";
import Container from "../common/Container";
import SplitTextContainer from "../common/SplitTextContainer";
import { textLeft, textRight } from "./IndividualTrainingText";
import GroupTraining from "./GroupTraining";
import Wrapper from "../common/Wrapper";

const Exercise = () => {
    return (
        <Wrapper>
            <HeaderImage image={treningsheader} text={"TRENING"} />
            <Container>
                <Schedule />
                <SplitTextContainer textLeft={textLeft} textRight={textRight} />
                <GroupTraining />
            </Container>
        </Wrapper>
    );
};

export default Exercise;
