import React, { Fragment } from "react";
import styled from "styled-components";
import RoundImage from "../common/RoundImage";
import caroline from "../../images/team/caroline.jpg";
import lise from "../../images/team/lise.jpg";
import thea from "../../images/team/thea.jpg";
import mari from "../../images/team/mari_flem.jpg"
import woman from "../../images/team/woman.jpg";
import torunn from "../../images/team/torunn.png";
import ingrid from "../../images/team/ingrid.jpg";

const deltaAktiv = [
    {
        name: "lise fjørtoft",
        image: lise
    },
    { name: "caroline strand", image: caroline },
    { name: "mari flem", image: mari }
];
const trimKlubben = [
    { name: "torunn otnes", image: torunn },
    { name: "mathilde harstad", image: woman },
    { name: "ingrid granøien", image: ingrid }
];

const AboutTeam = () => {
    const renderDeltaAktiv = () => {
        return deltaAktiv.map((member, i) => {
            return (
                <Fragment>
                    <StyledImageContainer key={`item-${i}`}>
                        <RoundImage image={member.image} />
                        <StyledP>{member.name}</StyledP>
                    </StyledImageContainer>
                </Fragment>
            );
        });
    };

    const renderTrimklubben = () => {
        return trimKlubben.map((member, i) => {
            return (
                <Fragment>
                    <StyledImageContainer key={`item-${i}`}>
                        <RoundImage image={member.image} />
                        <StyledP>{member.name}</StyledP>
                    </StyledImageContainer>
                </Fragment>
            );
        });
    };

    return (
        <StyledWrapper>
            <StyledH1>Delta Aktivt</StyledH1>
            <StyledContainer>{renderDeltaAktiv()}</StyledContainer>
            <StyledH1>Trimklubben Aktiv</StyledH1>
            <StyledContainer>{renderTrimklubben()}</StyledContainer>
        </StyledWrapper>
    );
};

export default AboutTeam;

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 4rem 0;
    padding: 2rem 0;
`;

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5rem;
    margin-bottom: 6rem;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 550px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const StyledH1 = styled.h1`
    color: #606060;
    font-size: 1.25rem;
    margin-right: auto;
    margin-bottom: 6rem;
`;

const StyledImageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledP = styled.p`
    text-transform: uppercase;
    color: #f7668b;
    font-weight: bold;
    font-size: 1.25rem;
`;
