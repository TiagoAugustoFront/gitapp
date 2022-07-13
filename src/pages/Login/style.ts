import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #DCDCDC;
`;

export const Content = styled.div`
    width: 80%;
    max-width: 19rem;
    border-radius: 7px;
    background: #4169E1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 1.2rem;
    padding: 1rem 0;
    margin: 0;
    width: 85%;
    max-width: 15rem;
    text-align: center;
    color: #fcfcfc;
`;

export const ContentInput = styled.label`
    width: 85%;
    max-width: 15rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Label = styled.p`
    width: 100%;
`

export const Input = styled.input`
    width: 100%;
    padding: 0.2rem 0.4rem;
    outline: none;
    border: none;
    border-radius: 3px;
    font-size: 1.1rem;
`;

export const Button = styled.button`
    width: 6rem;
    padding: 0.3rem 0.2rem;
    border: none;
    border-radius: 4px;
    margin-bottom: 1rem;
    font-size: 1.05rem;
    font-weight: bold;
    cursor: pointer;
    background-color: #97b5f7;
    transition: 0.5s;
    :hover{
       background-color: #bccef5;
    }
`;

