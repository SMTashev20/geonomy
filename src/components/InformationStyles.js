import styled from 'styled-components';

export const ParentSection = styled.section`
    height: 100vh;
    background-color: #0E0034;
    overflow: hidden;
`;

export const DarkHeading = styled.div`
    position: absolute;
    width: 100vw;
    white-space: nowrap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20.5rem;
    color: #160643;
    user-select: none;
    overflow: hidden;
`;

export const WhiteHeading = styled.div`
    position: absolute;
    padding-bottom: 10vh;
    margin-left: 6vw;
    margin-top: 10vh;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14rem;
    line-height: 211px;
    color: #FFFFFF;
    overflow: auto;
    white-space: nowrap;
    ::selection {
        background: #ea4c89;
    }
`;

export const Paragraph = styled.div`
    height: 28vh;
    width: 50vw;
    display: inline-block;
    margin-top: 37vh;
    margin-left: 6.7vw;
    padding: 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 28.9843px;
    line-height: 35px;
    color: #FFFFFF;
    overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 12px;
    }
    
    ::-webkit-scrollbar-track {
        background: linear-gradient(179.99deg, #180550 75.74%, rgba(24, 5, 80, 0) 112.02%);
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #2F0A7E;
        border-radius: 10px;
    }

    ::selection {
        background: #ea4c89;
    }
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
    ::selection {
        background: #ea4c89;
    }
`;

export const PopulationText = styled.div`
    // position: absolute;
    margin-top: 1.5vh;
    display: inline-block;
    text-align: right;
    ::selection {
        background: #ea4c89;
    }
`;

export const PopulationGradient = styled.span`
    disaply: inline-block;
    background-image: linear-gradient(100deg, #2EEBC9, #214DEC);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ::selection {
        background: #ea4c89;
    }
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
    ::selection {
        background: #ea4c89;
    }
`;

export const FinanceText = styled.div`
    // position: absolute;
    margin-top: 1.5vh;
    display: inline-block;
    text-align: right;
    ::selection {
        background: #ea4c89;
    }
`;

export const FinanceGradient = styled.span`
    disaply: inline-block;
    background-image: linear-gradient(90.98deg, #FF5454, #FF54C5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ::selection {
        background: #ea4c89;
    }
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
    ::selection {
        background: #ea4c89;
    }
`;

export const ClimateText = styled.div`
    // position: absolute;
    margin-top: 1.5vh;
    display: inline-block;
    text-align: right;
    ::selection {
        background: #ea4c89;
    }
`;

export const ClimateGradient = styled.span`
    disaply: inline-block;
    background-image: linear-gradient(100deg, #FF4A4A, #CE9F44);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ::selection {
        background: #ea4c89;
    }
`;

export const InformationBackButton = styled.button`
    height: 5vh;
    width: 5vh;
    display: flex;
    margin-top: 1.5vh;
    margin-left: 1vw;
    background: transparent;
`;