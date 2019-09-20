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
            En personlig trener vil hjelpe deg uansett hvilke mål og erfaring du har.
            </StyledLeftP>
            <StyledLeftP>
            Har du lyst å komme igang med trening? Våre fysioterapeuter hjelper deg gjerne. Vi kan gi deg den kunnskapen og veiledningen som gir deg motivasjon til videre trening.
            </StyledLeftP>
            <StyledLeftP>
            CAROLINE STRAND TLF: 469 08 316 CAROLINE@DELTAAKTIVT.NO
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
