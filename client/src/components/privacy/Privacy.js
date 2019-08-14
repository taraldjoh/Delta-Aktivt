import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const Privacy = () => {
    return (
        <div>
            <StyledHeader>Personvern</StyledHeader>
            <StyledP>
                PERSONVERNERKLÆRING FOR BEHANDLING HOS FYSIOTERAPEUT I DELTA
                AKTIVT
            </StyledP>
            <StyledP>
                Fysioterapeutene under Delta Aktivt AS ( org.no.911574861 ) er
                opptatt av å behandle personopplysninger på en betryggende og
                tillitsvekkende måte i forbindelse med at du benytter våre
                tjenester.
            </StyledP>
            <Button text="Last Ned" />
        </div>
    );
};

export default Privacy;

const StyledHeader = styled.h1`
    color: #000;
    padding: 2rem;
    margin-bottom: 2rem;
    font-weight: bold;
    border-bottom: 1px #000 solid;
`;

const StyledP = styled.p`
    margin-bottom: 1rem;
`;
