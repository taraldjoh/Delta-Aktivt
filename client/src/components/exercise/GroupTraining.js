import React from "react";
import styled from "styled-components";
import Title from "../common/Title";
import Button from "../common/Button";

const items = [
    {
        title: "MORGENKONDIS",
        content:
            "Gruppe for deg som vil trene på formiddag. Innholder både kondisjon- og styrketrening og er litt forskjellig fra dag til dag. Timen ledes av fysioterapeut. Her er det lett å tilpasse treningen etter egen form og kapasitet."
    },
    {
        title: "AKTIV PÅ DAGTID",
        content:
            "Trening for deg som er langtidssykemeldt eller ufør. Inneholder både kondisjon- og styrketrening. Timen skal tilpasses den enkelts fysiske forutsetninger, slik at hver en kan trene på sitt ninå. God dialog mellom fysioterapeut/instryktør og deltaker."
    },
    {
        title: "BEDRIFTSTRENING",
        content:
            "Bedrifter i Ålesund engasjere Delta Aktivt til å lede trening for ansatte. Treningen kan variere ut i fra både bedriftens, gruppen og den enkeltes behov. Treningen kan foregå både i arbeidstid eller etter arbeidstid. Treningen kan foregå i Delta Aktivt sine lokaer på Kråmyra 3 eller en annen plass og det er ønskelig. Trening utendørs er også et alternativ og gjennomføres per i dag."
    },
    {
        title: "4x4 INTERVALL MED STYRKE",
        content:
            "Gruppe for deg som vil trene på ettermiddag/kveld. Intervalltrening 4x4 min blir i dag sett på som den mest effektiv måten å komme raskt i bedre kondisjon. På relativt kort tid opplever du stor fremgang. Trening er ganske tøff, men ikke tøffere enn den enkelte ønsker det. Treningen avsluttes med styrketrening i sirkel. Timen ledes av fysioterapeut."
    },
    {
        title: "CROSS",
        content:
            "En effektiv sirkeltrening med 8-10 stasjoner, og annen hver stasjon er kondisjon og styrke. Det som er fint på denne timen er at alle trener i sitt tempo, derfor passer den for alle. Fysioterapeut vil hjelpe deg med å finne riktig belastning for deg."
    },
    {
        content: <Button text="Bestill time" destination="/" />
    }
];

const GroupTraining = () => {
    const renderItems = () => {
        return items.map((item, i) => {
            return (
                <StyledItemContainer>
                    <StyledTextContainer>
                        <StyledTextHeader>{item.title}</StyledTextHeader>
                        <StyledTextContent>{item.content}</StyledTextContent>
                    </StyledTextContainer>
                </StyledItemContainer>
            );
        });
    };

    return (
        <StyledWrapper>
            <Title text="Gruppetrening" />
            <StyledImageContainer>{renderItems()}</StyledImageContainer>
        </StyledWrapper>
    );
};

export default GroupTraining;

const StyledWrapper = styled.div`
    margin: 4rem 0;
`;

const StyledImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    grid-row-gap: 5rem;
    margin: 0 2rem;
    padding: 0 1.5rem;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(1, 1fr);
        margin: 0;
        padding: 0;
    }
`;

const StyledItemContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

const StyledTextContainer = styled.div`
    text-align: left;

    @media screen and (max-width: 1000px) {
        display: block;
    }
`;

const StyledTextHeader = styled.p`
    font-size: 2rem;
    color: #f7668b;
    font-weight: bold;
`;

const StyledTextContent = styled.p`
    color: #000;
    font-size: 1rem;
`;
