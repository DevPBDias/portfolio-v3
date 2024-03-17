import styled from "styled-components";

export const AboutContainer = styled.main`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    padding-inline: 10%;
    margin-block: 2em;
    gap: 2em;
`;

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-start;
    justify-items: center;
    gap: 3em;

    @media screen and (max-width: 950px){
        flex-flow: column nowrap;
        align-items: center;
    }
`;

export const TextContainer = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    justify-items: center;
    gap: 1em;

    .text_content {
        display: flex;
        flex-flow: column nowrap;
        gap: 1em;
    }

    p {
        font-size: 1rem;
        text-align: justify;
    }

    h4 {
        font-size: 3rem;
    }

    h6 {
        font-size: 1.5rem;
        margin-top: 1em;
        color: #1C8CDF;
        font-weight: 600;
    }

    @media screen and (max-width: 950px){
        width: 100%;

        h4 {
            font-size: 2.2rem;
        }

        h6 {
            font-size: 1.3rem;
        }
    }


    @media screen and (max-width: 550px){
        h4 {
            font-size: 1.5rem;
        }

        h6 {
            font-size: 1.1rem;
        }

        p {
            font-size: .8rem;
        }
    }
`;

export const IconContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    justify-items: center;
    gap: 2em;

    .icon_content {
        width: 6em;
        height: 6em;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-items: center;

        img {
            width: 50%;
            height: 50%;
        }

        p {
            font-size: 1rem;
            margin-top: .5em;
            font-weight: 600;
            text-align: center;
        }
    }

    @media screen and (max-width: 950px){
        gap: 1.5em;

        .icon_content {
            width: 5em;
            height: 5em;
        }

    }

    @media screen and (max-width: 550px){
        gap: 1.5em;

        .icon_content {
            width: 4em;
            height: 4em;

            p {
                font-size: .8rem;
            }
        }

    }

`;

