// Importing the "styled" property from the styled components dependancy, which is meant to create the styling.
import styled from 'styled-components';
import InfoButton from '../../img/html-assets/icons/info.png';

export const InformationButton = styled.button`
    width: "40px";
    height: "40px";
    position: "absolute";
    backgroundColor: "transparent";
    backgroundImage: url(${InfoButton});
    backgroundRepeat: "no-repeat";
    backgroundPosition: "center";
    right: "2vw";
    bottom: "3vh";
    border: "none";
    borderRadius: "100%";
`;

// Exoprting a styled div as a styled component to be used in About.jsx as an already designed out element.
export const Card = styled.div`
    width: 35vw;
    height: 19.5vh;
    box-sizing: border-box;
    margin-left: 2.5vw;
    margin-top: 2vh;
    background: rgba(248, 248, 248, 0.2);
    border: 1px solid #8A8A8A;
    border-radius: 36px;
    filter: drop-shadow(0px 16px 21px rgba(0, 0, 0, 1));
`;

// Styling for our CSS Grid skeleton.
export const GridContainer = styled.div`
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 10px;
`;

// Styling for the used images in the cards.
export const CardPictureContainer = styled.div`
    width: 7.5vw;
    height: 15vh;
    grid-row: 1 / span 8;
    justify-content: center;
    margin-top: 1.5vh;
    margin-left: 0.5vw;
    background-size: cover;
    background-repeat: no-repat;
    background-position: center;
    border-radius: 100%;
`;

// Styling for the team members' name hadings.
export const CardName = styled.div`
    width: 400px;
    padding: 20px 0;
    margin-left: 0.5vw;
    grid-row: 1 / 4;
    grid-column: 2 / 4;
    color: #FBFBFB;
    font-family: "Inter", sans-serif;
    font-size: 30px;
    font-weight: 700;
    ::selection {
        background: #ea4c89;
    }
`;

// Styling for the team members' descriptions.
export const CardDescription = styled.div`
    grid-row: 2 / span 3;
    grid-column: 2 / span 5;
    padding: 20px 0;
    margin-top: 3vh;
    margin-left: 0.5vw;
    font-family: 'Roboto';
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    color: #C4C4C4;
    ::selection {
        background: #ea4c89;
    }
`;