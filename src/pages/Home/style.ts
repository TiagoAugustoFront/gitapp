import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    background: #DCDCDC;
`;

export const Content = styled.div`
    width: 100%;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    flex-wrap: wrap;
    @media(min-width: 600px){
    }
`;
export const Header = styled.div`
    padding: 0.5rem 1rem;
    width: 100%;
    display: flex;
    background: #4766c3;
`;

export const Input = styled.input`
    padding: 0.2rem 0.4rem;
    margin: 0;
    width: 80%;
    max-width: 15rem;
    border: none;
    outline: none;
    border-radius: 2px;
    margin-right: 1rem;
`;

export const ContentChebox = styled.label`
    margin-right: 1rem;
    display: flex;
    flex-wrap: wrap;

    input{
        margin-right: 0.4rem;
    }
    p{
        margin: 0;
        color: #fcfcfc;
        font-weight: bold;
    }
`;

export const ContentOrder = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    h3{
        font-size: 1rem;
        margin-right: 1rem;
    }
`;

export const ContentCheboxOrder = styled.label`
    display: flex;
    align-items: center;

    margin: 0 0.5rem;

    select{
        outline: none;
        padding: 0.2rem 0.4rem;
        border: none;
        border-radius: 2px;
    }
`;

export const ContentCard = styled.div`
    padding: 1rem;
    width: 100%;
    border-radius: 8px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const Card = styled.div`
    width: 100%;
    padding: 0.5rem 0.8rem;
    border-radius: 8px;
    background: #4169E1;

    @media(min-width: 600px){
        width: calc(50% - 0.5rem);
    }
`;

export const CardTitle = styled.h2`
    margin: 0;

    font-size: 1.3rem;
    color: #fcfcfc;
`;

export const TextLanguage = styled.p`
    margin: 0;
    font-size: 0.9rem;
    text-align: end;
    font-weight: bold;
    color: #343434;
`;