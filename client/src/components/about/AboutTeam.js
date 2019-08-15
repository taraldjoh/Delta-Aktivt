import React from "react";
import styled from "styled-components";
import RoundImage from "../common/RoundImage";

const teamMembers = [
    {
        name: "Petter",
        position: "irrelevant",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        name: "Tarald",
        position: "irrelevant",
        image: "https://loremflickr.com/320/240/portrait",
        club: "trimklubben aktiv"
    },
    {
        name: "AEHJDETh",
        position: "irrelevant",
        image: "https://loremflickr.com/320/240/portrait"
    },
    {
        name: "sadfsdfsdf",
        position: "irrelevant",
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
    color: #f98fa0;
    font-weight: 600;
    font-size: 1.5rem;
`;

const StyledP = styled.p`
    color: #000;
    font-size: 1rem;
    font-weight: 600;
`;
