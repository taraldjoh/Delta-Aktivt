import React, { Fragment } from "react";
import styled from "styled-components";

const StyledLeftHeader = styled.h3`
    color: #000;
    margin: 0.5rem 0;
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
`;

const StyledLeftP = styled.p`
    line-height: 1.5;
    text-align: left;
    font-size: 1rem;
    margin: 1.5rem 0;
`;

const StyledRightP = styled.p`
    font-size: 1rem;
    margin-bottom: 1.5rem;
    text-align: left;
`;

export const textLeft = (
    <Fragment>
        <div>
            <StyledLeftHeader>Personlig Trener</StyledLeftHeader>
            <StyledLeftP>
                En personlig trener vil hjelpe deg med treningen uansett hvilke
                mål og hvilke erfaring du ha
            </StyledLeftP>
            <StyledLeftP>
                Mange har et behov for å komme i gang med trening, men vet
                samtidig at de trenger enten mer kunskap eller trenger en
                motivator til å hjelpe til med å få fremgang og resultat. Er
                dette noe du har ønske om, kan våre fysioterapeut er hjelpe deg
                med deg.
            </StyledLeftP>
            <StyledLeftP>
                IINGRID GRANØIEN TLF 928 54 488 INGRID@DELTAAKTIVT.NO
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

export const textRight = (
    <Fragment>
        <StyledLeftHeader>Bruk av Treningsrom</StyledLeftHeader>
        <StyledRightP>
            HOS DELTA AKTIVT KAN DU DRIVE EGENTRENING I VÅRT TRENINGSROM MED
            NØKKELKORT
        </StyledRightP>
        <StyledRightP>
            Ønsker du å trene utholdenhet, styrke, bevegelighet eller balanse på
            egenhånd i et hyggelig og imøtekommende miljø. Vi har et godt utvalg
            av forskjellig utstyr i vårt treningsrom, blandt annet tredemøller,
            spinningsykler, stasjonære styrkeapparater for overkropp og
            underkropp, redcord/slynge og frivekter. Alt du trenger for en
            effektiv og god treningsøkt. Utstyret har god kvalitet og levert av
            kjente produsenter. Treningsrommet er brukervennlig noe som gjør at
            du føler deg både trygg og komfortabel. Ved påmelding vil du få et
            nøkkelkort for 100 kr for inngang til senteret. Vi tilbyr også
            Personlig trening om du ønsker hjelp til å starte opp egentreningen,
            trenger et treningsprogram eller ekstra motivasjon til å yte ditt
            beste.
        </StyledRightP>
        <StyledRightP>
            Medlemskap for bruk av treningsrommet: 350 kr per mnd
        </StyledRightP>
        <StyledRightP>
            For mer informasjon og påmelding, kom gjerne innom klinikken for en
            hyggelig prat eller eller send mail: ingrid@deltaaktivt.no
        </StyledRightP>
    </Fragment>
);
