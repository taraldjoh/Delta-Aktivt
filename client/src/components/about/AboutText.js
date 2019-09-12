import React, { Fragment } from "react";
import styled from "styled-components";

const StyledLeftHeader = styled.h3`
    color: #000;
    margin: 0.5rem 0;
    font-size: 0.75rem;
    font-weight: bold;
`;

const StyledLeftP = styled.p`
    line-height: 1.5;
    margin: 1.5rem 0;
`;

const StyledRightP = styled.p`
    line-height: 2;
    text-align: left;
    margin-bottom: 1.5rem;
`;

export const textLeft = (
    <Fragment>
        <StyledLeftHeader>PARKERING</StyledLeftHeader>
        <StyledLeftP>
            LIGGER I ROLIGE OMGIVELSER MED LEIKEPLASSEN TIL BARNEHAGEN LIKE VED
            OG EN LITEN FOTBALLBANE NEDE PÅ GAMLE KRÅMYRA. DER ER GODT MED
            PARKERINGSPLASSER.
        </StyledLeftP>
    </Fragment>
);

export const textRight = (
    <Fragment>
        <StyledRightP>
            Per i dag er det 9 instruktører knyttet til Delta Aktivt og
            Trimklubben Aktiv. I Delta Aktivt er det tilknyttet 2
            fysioterapeuter på dagtid.
        </StyledRightP>
        <StyledRightP>
            Vi er alle fysioterapeuter med god erfaring fra ulike fagfelt og har
            ledet gruppetrening i mange år. Det er høy kompetanse blant våre
            fysioterapeuter – dette er vi er veldig stolte av. Vi har nær
            kontakt med forskermiljøet i Norge (NTNU i Trondheim) som forsker på
            trening for mannen i gata. Det er dessuten generelt høy
            kursdeltagelse blant våre instruktører, og det er også noe vi
            oppfordrer til."
        </StyledRightP>
        <StyledRightP>
            Vi holder oss faglig oppdaterte til enhver tid, og bruker vår
            kunnskap så godt som mulig i arbeidshverdagen vår. Som
            fysioterapeuter har vi også et stort nettverk av fagpersoner, også
            tverrfaglig, som vi bruker aktivt når vi har behov for det. Men selv
            om vi er fysioterapeuter, er det frisktrening som er i fokus hos
            oss. Vi snakker sjelden om sykdom i våre grupper og prøver å
            fokusere på det friske i hver enkelt. Dette er viktig for oss å
            formidle. trivsel.
        </StyledRightP>
        <StyledRightP>
            Vi har etterhvert opparbeidet oss en solid erfaring innen
            bedriftstrening. Vi har flere store kunder som er svært fornøyde med
            det tilbudet vi gir deres ansatte. En viktig konsekvens av
            helserelatert tilbud i bedriftene, er lavere sykefravær og økt
            trivsel."
        </StyledRightP>
    </Fragment>
);
