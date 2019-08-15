import React, { Fragment } from "react";
import styled from "styled-components";

const Schedule = () => {
    return (
        <Fragment>
            <StyledHeader>Insert shit schedule here >.></StyledHeader>
            <StyledDaysContainer>
                <StyledDaysP>Mandag</StyledDaysP>
                <StyledDaysP>tirsdag</StyledDaysP>
                <StyledDaysP>onsdag</StyledDaysP>
                <StyledDaysP>torsdag</StyledDaysP>
                <StyledDaysP>fredag</StyledDaysP>
                <StyledDaysP>lørdag</StyledDaysP>
                <StyledDaysP>søndag</StyledDaysP>
            </StyledDaysContainer>
        </Fragment>
    );
};

export default Schedule;

const StyledHeader = styled.h1`
    color: #000;
`;

const StyledDaysContainer = styled.div`
    display: Grid;
    grid-template-columns: repeat(7, 1fr);
    padding-bottom: 4rem;
    border-bottom: 1px solid #000;
`;

const StyledDaysP = styled.p`
    color: #fff;
    background-color: #f98fa0;
    font-weight: bold;
    padding: 1rem;
`;
