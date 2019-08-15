import React, { Fragment } from "react";
import HeaderImage from "../common/HeaderImage";

import treningsheader from "../../images/exercise/treningheader.png";
import Schedule from "../schedule/Schedule";
import Container from "../common/Container";
import SplitTextContainer from "../common/SplitTextContainer";
import { textLeft, textRight } from "./IndividualTrainingText";
import GroupTraining from "./GroupTraining";

const Exercise = () => {
    return (
        <Fragment>
            <HeaderImage image={treningsheader} />
            <Container>
                <Schedule />
                <SplitTextContainer textLeft={textLeft} textRight={textRight} />
                <GroupTraining />
            </Container>
        </Fragment>
    );
};

export default Exercise;
