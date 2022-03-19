import styled from 'styled-components';

export const TemporarySection = styled.section`
    height: 100vh;
    width: 100vw;
`;

export const Separator = styled.hr`
    height: inherit;
    width: 0.55vw;
    border: 10px;
    border-color: none;
    border-radius: 7px;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
`;

export const Container = styled.div`
    height 30vh;
    width: 50vw;
    display: flex;
    padding-top: 40vh;
    margin-left: 12vw;
`;

export const LocationParent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LocationHeading = styled.div`
    height: 1vh;
    margin-left: 1vw;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 7rem;
    color: #FFFFFF;
`;

export const LocationDescription = styled.div`
    height: 14vh;
    width: 30vw;
    margin-top: 13vh;
    margin-left: 1vw;
    font-weight: 400;
    font-size: 1.5rem;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    color: #FFFFFF;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const FindOutMoreButton = styled.button`
    width: 18vw;
    height: 8vh;
    margin-left: 13vw;
    display: inline-block;
    align-items: center;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.75rem;
    text-align: center;
    border: none;
    border-radius: 64px;
    cursor: pointer;
    background: linear-gradient(127.29deg, #8BE3FF -5.93%, #BE8BFF 96.13%);
    box-shadow: inset 12px 12px 24px #6FB5CB, inset -24px -24px 48px rgba(0, 0, 0, 0.25);
    filter: drop-shadow(24px 24px 48px rgba(0, 0, 0, 0.25));
`;