import React from "react";
import styled from "styled-components";
import RoundImage from "../common/RoundImage";

const items = [
    {
        title: "Morgenkondis",
        content:
            "Gruppe for deg som vil trene på formiddag. Innholder både kondisjon- og styrketrening og er litt forskjellig fra dag til dag. Timen ledes av fysioterapeut. Her er det lett å tilpasse treningen etter egen form og kapasitet.",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        title: "Morgenkondis",
        content:
            "Gruppe for deg som vil trene på formiddag. Innholder både kondisjon- og styrketrening og er litt forskjellig fra dag til dag. Timen ledes av fysioterapeut. Her er det lett å tilpasse treningen etter egen form og kapasitet.",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        title: "Morgenkondis",
        content:
            "Gruppe for deg som vil trene på formiddag. Innholder både kondisjon- og styrketrening og er litt forskjellig fra dag til dag. Timen ledes av fysioterapeut. Her er det lett å tilpasse treningen etter egen form og kapasitet.",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        title: "Morgenkondis",
        content:
            "Gruppe for deg som vil trene på formiddag. Innholder både kondisjon- og styrketrening og er litt forskjellig fra dag til dag. Timen ledes av fysioterapeut. Her er det lett å tilpasse treningen etter egen form og kapasitet.",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        title: "Morgenkondis",
        content:
            "Gruppe for deg som vil trene på formiddag. Innholder både kondisjon- og styrketrening og er litt forskjellig fra dag til dag. Timen ledes av fysioterapeut. Her er det lett å tilpasse treningen etter egen form og kapasitet.",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        title: "Morgenkondis",
        content:
            "Gruppe for deg som vil trene på formiddag. Innholder både kondisjon- og styrketrening og er litt forskjellig fra dag til dag. Timen ledes av fysioterapeut. Her er det lett å tilpasse treningen etter egen form og kapasitet.",
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
            <StyledHeader>Gruppetrening</StyledHeader>
            <StyledImageContainer>{renderItems()}</StyledImageContainer>
        </StyledWrapper>
    );
};

export default GroupTraining;

const StyledWrapper = styled.div`
    margin: 4rem 0;
`;

const StyledHeader = styled.h1`
    padding: 2rem;
    border-bottom: 1px solid #000;
    color: #000;
    margin-bottom: 4rem;
`;

const StyledImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    grid-row-gap: 5rem;
    margin: 0 3rem;
    padding: 0 2rem;
`;

const StyledItemContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 2rem;
`;

const StyledTextContainer = styled.div`
    margin-left: 2rem;
    text-align: left;
`;

const StyledTextHeader = styled.p`
    font-size: 1.25rem;
    color: #7bdecb;
    font-weight: bold;
`;

const StyledTextContent = styled.p`
    color: #000;
    font-size: 0.75rem;
`;
