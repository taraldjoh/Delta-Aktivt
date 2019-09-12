import React from "react";
import styled from "styled-components";
import RoundImage from "../common/RoundImage";
import caroline from "../../images/team/caroline.jpg";
import hilde from "../../images/team/hilde.jpg";
import ingrid from "../../images/team/ingrid.jpg";
import marita from "../../images/team/marita.jpg";
import marthe from "../../images/team/marthe.jpg";
import pauline from "../../images/team/pauline.jpg";
import ranveig from "../../images/team/ranveig.jpg";
import renate from "../../images/team/renate.jpg";
import susan from "../../images/team/susan.jpg";
import thea from "../../images/team/thea.jpg";
import filler from "../../images/team/t1.jpg";

const teamMembers = [
    {
        name: "Ingrid Granøien",
        position: "innhaver",
        image: ingrid
    },
    {
        name: "Hilde Stette",
        position: "innhaver",
        image: hilde
    },
    {
        name: "Caroline Strand",
        position: "fysioterapaut",
        image: caroline
    },
    {
        name: "Thea Melkevik",
        position: "fysioterapaut",
        image: filler,
        club: "trimklubben aktiv"
    },
    {
        name: "Mathilde Harstad",
        position: "instruktør",
        club: "trimklubben aktiv",
        image: filler
    },
    {
        name: "Marita Strømsheim",
        position: "instruktør",
        club: "trimklubben aktiv",
        image: marita
    },
    {
        name: "Pauline Holøyen",
        position: "fysioterapaut",
        club: "trimklubben aktiv",
        image: pauline
    },
    {
        name: "Marita Longva",
        position: "fysioterapaut",
        club: "trimklubben aktiv",
        image: filler
    },
    {
        name: "Marita Strømsheim",
        position: "fysioterapaut",
        club: "trimklubben aktiv",
        image: filler
    },
    {
        name: "Torunn Otnes",
        position: "fysioterapaut ",
        club: "trimklubben aktiv",
        image: filler
    },
    {
        name: "Eline Humlen Seth",
        position: "fysioterapaut",
        club: "aksla/godøy håndball",
        image: filler
    }
];

const AboutTeam = () => {
    const renderTeamMembers = () => {
        return teamMembers.map((member, i) => {
            return (
                <StyledImageContainer key={`item-${i}`}>
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
