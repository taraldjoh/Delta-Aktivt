import React from "react";
import styled from "styled-components";
import RoundImage from "../common/RoundImage";
import Title from "../common/Title";

const items = [
    {
        title: "MORGENKONDIS",
        content:
            "Gruppe for deg som vil trene på formiddag. Innholder både kondisjon- og styrketrening og er litt forskjellig fra dag til dag. Timen ledes av fysioterapeut. Her er det lett å tilpasse treningen etter egen form og kapasitet.",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        title: "AKTIV PÅ DAGTID",
        content:
            "Trening for deg som er langtidssykemeldt eller ufør. Inneholder både kondisjon- og styrketrening. Timen skal tilpasses den enkelts fysiske forutsetninger, slik at hver en kan trene på sitt ninå. God dialog mellom fysioterapeut/instryktør og deltaker.",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        title: "BEDRIFTSTRENING",
        content:
            "Bedrifter i Ålesund engasjere Delta Aktivt til å lede trening for ansatte. Treningen kan variere ut i fra både bedriftens, gruppen og den enkeltes behov. Treningen kan foregå både i arbeidstid eller etter arbeidstid. Treningen kan foregå i Delta Aktivt sine lokaer på Kråmyra 3 eller en annen plass og det er ønskelig. Trening utendørs er også et alternativ og gjennomføres per i dag.",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        title: "4x4 INTERVALL MED STYRKE",
        content:
            "Gruppe for deg som vil trene på ettermiddag/kveld. Intervalltrening 4x4 min blir i dag sett på som den mest effektiv måten å komme raskt i bedre kondisjon. På relativt kort tid opplever du stor fremgang. Trening er ganske tøff, men ikke tøffere enn den enkelte ønsker det. Treningen avsluttes med styrketrening i sirkel. Timen ledes av fysioterapeut.",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        title: "AEROBIC + STYRKE",
        content:
            "Aerobic er enkle stegvariasjoner med mål om moderat intensitet som gir kondisjonseffekt og varer i 35 min. Deretter starter styretrening i sirkel.  På denne gruppen kan du velge å komme til starttid eller til andre del som starter 35 min ut i timen. De som kommer direkte til styrkedelen oppfordres til å varme opp på forhånd.",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        title: "CROSS",
        content:
            "En effektiv sirkeltrening med 8-10 stasjoner, og annen hver stasjon er kondisjon og styrke. Det som er fint på denne timen er at alle trener i sitt tempo, derfor passer den for alle. Fysioterapeut vil hjelpe deg med å finne riktig belastning for deg.",
        image: "https://loremflickr.com/320/240/portrait"
    }
];

const GroupTraining = () => {
    const renderItems = () => {
        return items.map((item, i) => {
            return (
                <StyledItemContainer>
                    <RoundImage image={item.image} />
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
    }
`;

const StyledItemContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

const StyledTextContainer = styled.div`
    margin-left: 2rem;
    text-align: left;

    @media screen and (max-width: 1000px) {
        display: block;
    }
`;

const StyledTextHeader = styled.p`
    font-size: 1.25rem;
    color: #f7668b;
    font-weight: bold;
`;

const StyledTextContent = styled.p`
    color: #000;
    font-size: 0.75rem;
`;
