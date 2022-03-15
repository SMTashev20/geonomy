import styled from 'styled-components';

export const ParentSection = styled.section`
    height: 100vh;
    width: 100vw;
    background-color: #0E0034;
`;

export const DarkHeading = styled.div`
    position: absolute;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20.5rem;
    color: #160643;
    user-select: none;
`;

export const WhiteHeading = styled.div`
    position: absolute;
    margin-left: 6vw;
    margin-top: 10vh;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14rem;
    line-height: 211px;
    color: #FFFFFF;
`;

export const Paragraph = styled.div`
    height: 5vh;
    width: 50vw;
    display: inline-block;
    padding-top: 40vh;
    padding-left: 6.7vw;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 28.9843px;
    line-height: 35px;
    color: #FFFFFF;
`;

export const Image = styled.div`
    height: 35vh;
    width: 30vw;
    float: right;
    display: inline-block;
    margin-right: 8vw;
    margin-top: 35vh;
    background-color: coral;
`;

export const Statistics = styled.div`
    height: 30vh;
    width: 80vw;
    display: flex;
    margin-left: 1vw;
    flex-direction: column;
`;

export const Population = styled.div`
    display: flex;
    margin-left: 5vw;
    line-height: 45px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 37.5777px;
    color: white;
`;

export const PopulationText = styled.div`
    position: absolute;
    margin-top: 1.5vh;
    display: inline-block;
    text-align: right;
`;

export const PopulationGradient = styled.span`
    disaply: inline-block;
    background-image: linear-gradient(120deg, #49EB2E, #214DEC);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const Finance = styled.div`
    display: flex;
    margin-top: 2vh;
    margin-left: 5vw;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 37.5777px;
    line-height: 45px;
    color: white;
`;

export const FinanceText = styled.div`
    // position: absolute;
    margin-top: 1.5vh;
    display: inline-block;
    text-align: right;
`;

export const FinanceGradient = styled.span`
    disaply: inline-block;
    background-image: linear-gradient(90.98deg, #FF5454, #FF54C5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const Climate = styled.div`
    display: flex;
    margin-top: 2vh;
    margin-left: 5vw;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 37.5777px;
    line-height: 45px;
    color: white;
`;

export const ClimateText = styled.div`
    // position: absolute;
    margin-top: 1.5vh;
    display: inline-block;
    text-align: right;
`;

export const ClimateGradient = styled.span`
    disaply: inline-block;
    background-image: linear-gradient(100deg, #FF4A4A, #CE9F44);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;