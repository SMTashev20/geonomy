import styled from 'styled-components';

// export const InformationButton = styled.button`
//     width: "40px";
//     height: "40px";
//     position: "absolute";
//     backgroundColor: "transparent";
//     backgroundImage: url(../img/html-assets/icons/information/info.png);
//     backgroundRepeat: "no-repeat";
//     backgroundPosition: "center";
//     right: "2vw";
//     bottom: "3vh";
//     border: "none";
//     borderRadius: "100%";
// `;

// export const Parent = styled.section`
//     textAlign: "center";
//     color: "white";
//     fontFamily: "Raleway, sans-serif";
//     fontSize: "90px";
//     fontWeight: "bold";
// `;

// export const Heading = styled.h3`
//     textAlign: "center";
//     color: "white";
//     fontFamily: "Raleway, sans-serif";
//     fontSize: "90px";
//     fontWeight: "bold";
// `;

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

export const GridContainer = styled.div`
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 10px;
`;

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
`;

export const CardDescription = styled.div`
    grid-row: 2 / span 3;
    grid-column: 2 / span 5;
    padding: 20px 0;
    margin-top: 3vh;
    margin-left: 0.5vw;
    font-family: 'Roboto';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    color: #C4C4C4;
`;