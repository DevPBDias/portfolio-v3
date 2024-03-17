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
`;