import styled from 'styled-components';

export const ParentErrorBoundary = styled.section`
    height: 100vh;
    width: 100vw;
    background-color: #0E0034;
    display: flex;
    flex-direction: column;
`;

export const Whoops = styled.div`
    background-image: linear-gradient(180deg, #FF2B91 26.02%, rgba(255, 48, 48, 0) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    position: absolute;
    font: 6rem "Raleway", sans-serif;
    fill: #EC22CF;
    font-weight: 700;
`;

export const Description = styled.div`
    font: 1.8rem "Roboto", sans-serif;
    color: #FFFFFF;
    fill: white;
    font-weight: 500;
`;

export const Astronaut = styled.div`
    position: fixed;
    width: 30%;
    right: 0.5vw;
    bottom: 0;
`;