import React from "react";
import styled from "styled-components";
import RoundImage from "../common/RoundImage";
import Title from "../common/Title";

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
    color: #7bdecb;
    font-weight: bold;
`;

const StyledTextContent = styled.p`
    color: #000;
    font-size: 0.75rem;
`;
