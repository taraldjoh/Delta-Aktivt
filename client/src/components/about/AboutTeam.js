import React from "react";
import styled from "styled-components";
import RoundImage from "../common/RoundImage";

const teamMembers = [
    {
        name: "Caroline Strand",
        position: "fysioterapaut",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        name: "Thea Melkevik",
        position: "fysioterapaut",
        image: "https://loremflickr.com/320/240/portrait",
        club: "trimklubben aktiv"
    },
    {
        name: "Mathilde Harstad",
        position: "instruktør",
        club: "trimklubben aktiv",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        name: "Ingrid Granøien",
        position: "innhaver",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        name: "Hilde Stette",
        position: "innhaver",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        name: "Marita Strømsheim",
        position: "instruktør",
        club: "trimklubben aktiv",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        name: "Pauline Holøyen",
        position: "fysioterapaut",
        club: "trimklubben aktiv",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        name: "Marita Longva",
        position: "fysioterapaut",
        club: "trimklubben aktiv",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        name: "Marita Strømsheim",
        position: "fysioterapaut",
        club: "trimklubben aktiv",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        name: "Torunn Otnes",
        position: "fysioterapaut ",
        club: "trimklubben aktiv",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        name: "Eline Humlen Seth",
        position: "fysioterapaut",
        club: "aksla/godøy håndball",
        image: "https://loremflickr.com/320/240/portrait"
    }
];

const AboutTeam = () => {
    const renderTeamMembers = () => {
        return teamMembers.map((member, i) => {
            return (
                <StyledImageContainer>
                    <RoundImage image={member.image} />
                    <StyledTextContainer>
                        <StyledNameHeader>{member.name}</StyledNameHeader>
                        <StyledP>{member.position}</StyledP>
                        <StyledP>{member.club}</StyledP>
                    </StyledTextContainer>
                </StyledImageContainer>
            );
        });
    };

    return (
        <StyledWrapper>
            <StyledContainer>{renderTeamMembers()}</StyledContainer>
        </StyledWrapper>
    );
};

export default AboutTeam;

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;
    padding: 2rem 0;
`;

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5rem;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 550px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const StyledImageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledTextContainer = styled.div`
    text-align: left;
    width: 100%;
`;

const StyledNameHeader = styled.p`
    margin-top: 1rem;
    color: #f7668b;
    font-weight: 600;
    font-size: 1.5rem;
`;

const StyledP = styled.p`
    color: #000;
    font-size: 1rem;
    font-weight: 600;
`;
