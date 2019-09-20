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
            "Trening for deg som er langtidssykemeldt eller ufør. Inneholder både kondisjon- og styrketrening. Timen skal tilpasses den enkelte fysiske forutsetninger, slik at hver og en kan trene på sitt nivå. God dialog mellom fysioterapeut/instruktør og deltaker."
    },
    {
        title: "BEDRIFTSTRENING",
        content:
            "Bedrifter i Ålesund engasjerer Delta Aktivt til å lede trening for ansatte. Treningen kan variere ut i fra både bedriftens, gruppen og den enkeltes behov. Treningen kan foregå både i arbeidstid og etter arbeidstid. Det kan også settes opp trening i Delta Aktivt sine lokaler på Kråmyra eller i andre treningslokaler. Trening utendørs er også et alternativ og gjennomføres per i dagsdato."
    },
    {
        title: "4x4 INTERVALL MED STYRKE",
        content:
            "Gruppe for deg som vil trene på ettermiddag/kveld. Intervalltrening 4x4 er en god treningsform for å oppnå bedre kondisjon. På relativt kort tid kan du oppleve fremgang. Trening er ganske tøff, men ikke tøffere enn den enkelte ønsker det. Treningen avsluttes med styrketrening i sirkel. Timen ledes av fysioterapeut."
    },
    {
        title: "CROSS",
        content:
            "En effektiv sirkeltrening med 8-10 stasjoner, der annen hver stasjon er kondisjon og styrke. Det som gjør at denne timen passer for alle, er at man kan trene i sitt eget tempo. Fysioterapeut vil hjelpe deg med å finne din riktige belastning."
    },
    {
        content: (
            <a
                href="https://timebestilling.aspit.no/?fbclid=IwAR3NjTAjWkNTbqZkExkUOSf0gkSEKb511zyS0ljwIYDizz7TEppe0gR0HhQ#/p3547/main"
                target="_blank"
                rel="noopener nofreferrer"
            >
                <Button text="Bestill time" />
            </a>
        )
    }
];

const GroupTraining = () => {
    const renderItems = () => {
        return items.map((item, i) => {
            return (
                <StyledItemContainer key={i}>
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
    padding: 2rem 0;
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
