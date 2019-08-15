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
        <div>
            <StyledLeftHeader>LEIE LOKALER</StyledLeftHeader>
            <StyledLeftP>
                ØNSKER DU Å LEIE VÅRE LOKALE TIL BARNEBURSDAG, KONFIRMASJON
                ELLER FAMILIESELSKAP SÅ ER DET MULIG.
            </StyledLeftP>
            <StyledLeftP>
                VI ER BORD, STOLER OG DEKKETØY TIL 32 STK, MEN SALEN ROMMER
                FLERE DERSOM DET ER ØNSKELIG. KJØKKEN ER LITE MEN HAR KOMFYR MED
                STEKOVN, KJØLESKAP OG LITEN OPPVASKMASKIN. LOKALENE ER ELLERS
                LYSE, ROMSLIGE OG KOSELIGE.
            </StyledLeftP>
        </div>
        <div>
            <StyledLeftHeader>PARKERING</StyledLeftHeader>
            <StyledLeftP>
                LIGGER I ROLIGE OMGIVELSER MED LEIKEPLASSEN TIL BARNEHAGEN LIKE
                VED OG EN LITEN FOTBALLBANE NEDE PÅ GAMLE KRÅMYRA. DER ER GODT
                MED PARKERINGSPLASSER.
            </StyledLeftP>
        </div>
        <div>
            <StyledLeftHeader>PRISER</StyledLeftHeader>
            <StyledLeftP>
                BARNEBURSDAG 3 TIMER 1000,- SELSKAP SOM BARNEDÅP, KONFIRMASJON
                OG FAMILESELSKAP (HELE DAGEN) 2000,-
            </StyledLeftP>
            <StyledLeftP>
                VASK AV LOKALENE KOMMER I TILLEGG (400,-) ELLER EN KAN VELGE Å
                GJØRE DET SELV.
            </StyledLeftP>
            <StyledLeftP>
                TRENINGSSAL MED TILHØRENDE UTSTYR KAN OGSÅ LEIES TIL Å DRIVE
                EGNE GRUPPER ELLER EGENTRENING.
            </StyledLeftP>
            <StyledLeftP>
                FOR PRIS KONTAKT INGRID GRANØIEN - INGRID@DELTAAKTIVT.NO
            </StyledLeftP>
        </div>
    </Fragment>
);

export const textRight = (
    <Fragment>
        <StyledRightP>
            Per i dag er det 9 instruktører knyttet til Delta Aktivt. De er alle
            fysioterapeuter med god erfaring fra ulike fagfelt og har ledet
            gruppetrening i mange år. På dagtid er vi for tiden 3
            fysioterapeuter som som jobber på. Det er høy kompetanse blant våre
            fysioterapeuter – dette er vi er veldig stolte av. Vi har nær
            kontakt med forskermiljøet i Norge (NTNU i Trondheim) som forsker på
            trening for den vanlige mann i gata. Det er dessuten generelt høy
            kursdeltagelse blant våre instruktører, og det er også noe vi
            oppfordrer til.
        </StyledRightP>
        <StyledRightP>
            Vi dekker altså mange ulike kompetanseområder, holder oss faglig
            oppdaterte til enhver tid, og bruker vår kunnskap så godt som mulig
            i arbeidshverdagen vår. Som fysioterapeuter har vi også et stort
            nettverk av fagpersoner, også tverrfaglig, som vi bruker aktivt når
            vi har behov for det. Men selv om vi er fysioterapeuter, er det
            frisktrening som er i fokus hos oss. Det er dette vi har blitt gode
            på opp gjennom årene, som vi føler at vi kan best! Vi snakker
            sjelden om sykdom i våre grupper og prøver å fokusere på det friske
            i hver enkelt. Dette er viktig for oss å formidle. Hvert år drar vi
            på kurs for å få impulser til hvordan vi kan opprettholde det
            morsomme og lystbetonte i våre treningsøkter.
        </StyledRightP>
        <StyledRightP>
            Vi har etterhvert opparbeidet oss en solid erfaring innen
            bedriftstrening. Vi har flere store kunder som er svært fornøyde med
            det tilbudet vi gir deres ansatte. En viktig konsekvens av
            helserelatert tilbud i bedriftene, er lavere sykefravær og økt
            trivsel.
        </StyledRightP>
    </Fragment>
);
