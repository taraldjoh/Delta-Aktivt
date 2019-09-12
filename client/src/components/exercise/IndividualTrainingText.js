import React, { Fragment } from "react";
import styled from "styled-components";

const StyledLeftHeader = styled.h3`
    color: #000;
    margin: 0.5rem 0;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
`;

const StyledLeftP = styled.p`
    line-height: 1.5;
    text-align: left;
    font-size: 1.15rem;
    margin: 1.5rem 0;
`;

const StyledRightP = styled.p`
    line-height: 1.5;
    font-size: 1.15rem;
    margin-bottom: 1.5rem;
    text-align: left;
`;

export const textRight = (
    <Fragment>
        <div>
            <StyledLeftHeader>Personlig Trener</StyledLeftHeader>
            <StyledLeftP>
                En personlig trener vil hjelpe deg med treningen uansett hvilke
                mål og hvilken erfaring du har.
            </StyledLeftP>
            <StyledLeftP>
                Mange har et behov for å komme i gang med trening, men vet
                samtidig at de trenger enten mer kunskap eller trenger en
                motivator til å hjelpe til med å få fremgang og resultat. Er
                dette noe du har ønske om, kan våre fysioterapeut er hjelpe deg
                med deg.
            </StyledLeftP>
            <StyledLeftP>
                CAROLINE STRAND TLF: 469 08 316 CAROLINE@DELTAAKTIVT.NO
            </StyledLeftP>
            <StyledLeftP>
                THEA MELKEVIK TLF: 413 40 185 THEAMEL@DELTAAKTIVT.NO
            </StyledLeftP>
        </div>
    </Fragment>
);

export const textLeft = (
    <Fragment>
        <StyledLeftHeader>Bruk av Treningsrom</StyledLeftHeader>
        <StyledRightP>
            Om du ønsker bruk av treningsrom ta kontakt med house of motion
            post@houseofmothion.no
        </StyledRightP>
    </Fragment>
);
