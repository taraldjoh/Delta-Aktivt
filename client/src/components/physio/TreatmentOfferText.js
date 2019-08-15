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
            <StyledLeftHeader>Såletilpasning</StyledLeftHeader>
            <StyledLeftP>
                Opplever du smerter eller plager i føtter, ankler, legger, knær
                eller hofter? Ønsker du å få tips til gode øvelser, eller
                kanskje få individuelt tilpassede såler? Renate og Ingrid
                tilpasser Formthoticssåler, som både kan bidra til å korrigere
                feilstillinger i føttene og og til å forebygge
                belastningsskader. Landslagene innen blant annet skiskyting og
                langrenn benytter seg av sålene, og tilbakemeldingene er
                utelukkende positive
            </StyledLeftP>
            <StyledLeftP>SETT INN BILDE HER</StyledLeftP>
            <StyledLeftP>
                Ønsker du å få tilpasset såler? Ring tlf. 469 08 316 eller send
                oss en mail: caroline@deltaaktivt.no eller
                theamel@deltaaktivt.no
            </StyledLeftP>
        </div>
    </Fragment>
);

export const textRight = (
    <Fragment>
        <StyledRightP>
            Vi er en privat behandlingsklinikk, der ingen av fysioterapeutene
            har tilskuddsordning fra det offentlige. Vi velger alltid de
            behandlingsmetodene som er best dokumenterte og mest effektive. Vår
            praksis styres ikke av statlige regulativer og takstplakater.
        </StyledRightP>
        <StyledRightP>
            Vi streber etter å gi raskt behandling når problemet er ute. Vi har
            korte ventelister. Vi vil samtidig prøve å finne tider som passer
            deg. Det er ikke nødvendig med rekvisisjon fra lege for å få komme
            til oss, og du kan dermed komme rett til undersøkelse hos en av våre
            fysioterapeuter. Vi setter igang tiltak basert på funn fra
            fysioterapeutisk undersøkelse og vi vil fortløpene evaluere effekten
            av tiltakene, og vurdere videre forløp.
        </StyledRightP>
        <StyledRightP>
            Det vi gjør baserer seg på klinisk forskning og egen erfaring, og du
            som pasient vil bli vurdert og behandlet på en profesjonell og trygg
            måte. Vi henviser deg videre til relevant undersøkelse og behandling
            om vi ikke klarer å hjelpe deg.
        </StyledRightP>
        <StyledRightP>
            Våre fysioterapeuter har erfaring fra ulike områder som
            idrettsfysioterapi, hjerterehabilitering, ryggpoliklinikk,
            psykiatri, kommunalt arbeid, sykehus, antidoping og privat praksis.
            Vi behandler hovedsaklig muskel- og skjelettplager, som blant annet
            musearm, senebetennelse, slitasjegikt, hælspore/plantar fascitt og
            andre fotplager, achillesbetennelse, prolaps, rygg- og nakkeplager,
            skuldersmerter og andre muskulære plager, samt akutte og kroniske
            idrettsskader.
        </StyledRightP>
    </Fragment>
);
