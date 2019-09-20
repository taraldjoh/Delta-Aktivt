import React, { Fragment } from "react";
import styled from "styled-components";
import Button from "../common/Button";

const listItems = [
    "Tradisjonelle benkebehandling",
    "Triggerpunktbehandling - manuelt og ved bruk av dry needling/nåler",
    "Øvelsesbehandling med bruk av: Medisinsk treningsterapi   Redcord (slynge)",
    "Veiledet trening / personlig trening ",
    "Sjokkbølgebehandling",
    "Kinesiotaping ",
    "Massasje ",
];

export default function PhysioMethods() {
    const renderListItems = () => {
        return listItems.map((item, i) => {
            return (
                <StyledItemContainer key={`list-item-${i}`}>
                    <StyledCircle />
                    <p>{item}</p>
                </StyledItemContainer>
            );
        });
    };
    return (
        <Fragment>
            <StyledListItemWrapper>{renderListItems()}</StyledListItemWrapper>
            <a
                href="https://timebestilling.aspit.no/?fbclid=IwAR3NjTAjWkNTbqZkExkUOSf0gkSEKb511zyS0ljwIYDizz7TEppe0gR0HhQ#/p3547/main"
                target="_blank"
                rel="noopener nofreferrer"
            >
                <Button text="Bestill time" />
            </a>
        </Fragment>
    );
}

const StyledListItemWrapper = styled.div`
    margin: 0 5rem;
    padding: 0 3rem;

    @media screen and (max-width: 1000px) {
        margin: 0 2.5rem;
        padding: 0 1.5rem;
    }
    @media screen and (max-width: 500px) {
        margin: 0;
        padding: 0;
    }
`;

const StyledItemContainer = styled.div`
    display: flex;
    margin-bottom: 1rem;
`;

const StyledCircle = styled.div`
    position: relative;
    height: 25px;
    width: 25px;
    min-width: 25px;
    min-height: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-right: 2rem;
    -webkit-box-shadow: 5px 5px 10px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 5px 5px 10px -5px rgba(0, 0, 0, 0.75);
    box-shadow: 5px 5px 10px -5px rgba(0, 0, 0, 0.75);
    ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #158175;
        z-index: -1;
        opacity: 1;
    }
`;
