import styled from "styled-components";

export const ContactContainer = styled.main`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-items: center;
    justify-content: center;
    padding-inline: 10%;
    gap: 4em;

    @media screen and (max-width: 850px){
        flex-flow: column nowrap;
        gap: 1em;
    }
`;

export const TextContainer = styled.section`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-items: center;
    justify-content: center;
    gap: 1em;
    width: 50%;
    height: 100%;

    h1 {
        font-size: 4rem;
    }

    p {
        font-size: 2rem;
    }

    @media screen and (max-width: 1350px){
        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 850px){
        width: 100%;
        height: 30%;

        h1 {
            font-size: 2.5rem;
        }

        p {
            font-size: 1.2rem;
        }
    }

    @media screen and (max-width: 550px){
        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 1rem;
        }
    }
`;

export const PhotoContainer = styled.section`
    width: 50%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-items: center;
    justify-content: center;

    img {
        width: 60%;
        height: 60%;
        border-radius: 100%;
    }

    @media screen and (max-width: 850px){
        width: 100%;
        height: 60%;

        img {
            width: 50%;
            height: 100%;
        }
    }

    @media screen and (max-width: 550px){
        width: 100%;
        height: 50%;
        
        img {
            width: 60%;
            height: 100%;
        }
    }
`;