// Importing the "styled" property from the styled components dependancy, which is meant to create the styling.
import styled from 'styled-components';

export const TempSection = styled.section`
    height: 100vh;
    width: 100vw;
    background-color: #0E0034;
`;

export const SearchBarParent = styled.div `
    margin-left: 35vw;
    padding-top: 45vh;
`;

export const SearchBar = styled.form`
    width: 30vw;
    height: 12vh;
    background: rgba(241, 158, 241, 0.1);
    border: 1px solid #959595;
    box-sizing: border-box;
    backdrop-filter: blur(40px);
    border-radius: 90px;
    display: flex;
    align-items: center;
    text-align: center;
`;

export const SearchBarInput = styled.input`
    width: 30vw;
    height: 12vh;
    background-color: transparent;
    border: none;
    margin-left: 0.5vw;
    font-size: 1.8rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    color: #FFFFFF;

    :focus{
        outline: none;
    }
    ::placeholder  {
        color: white;
        opacity: 0.5;
    }
`;