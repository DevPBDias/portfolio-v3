import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-items: center;
    justify-content: center;
    padding-inline: 10%;
    gap: 4em;
`;

export const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    justify-items: center;

    p {
        font-size: 2rem;
        color: #1C8CDF;
    }

    h1 {
        font-size: 7rem;
        font-weight: 600;
    }

    h3 {
        font-size: 3.5rem;
    }

    @media screen and (max-width: 1300px){
        p {
            font-size: 1.4rem;
        }

        h1 {
            font-size: 5rem;
        }

        h3 {
            font-size: 2.5rem;
        }
    }

    @media screen and (max-width: 950px){

        p {
            font-size: 1.2rem;
        }

        h1 {
            font-size: 4rem;
        }

        h3 {
            font-size: 2rem;
        }
    }

    @media screen and (max-width: 750px){
        gap: .5em;

        p {
            font-size: 1.2rem;
        }

        h1 {
            font-size: 3rem;
        }

        h3 {
            font-size: 2rem;
        }
    }

    @media screen and (max-width: 550px){
            p {
                font-size: .8rem;
            }

            h1 {
                font-size: 2.5rem;
            }

            h3 {
                font-size: 1.5rem;
            }
    }
`;

export const BtnsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    justify-items: center;
    gap: 4em;

    a {
        font-size: 1.3rem;
        width: 10em;
        height: 2em;
        padding: 0.5em;
        border-radius: 12px;
        border: none;
        background-color: #D0777D;
        color: #0A090A;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background-color: #1C8CDF;
            color: #F3ECF0;
        }
    }

    @media screen and (max-width: 700px){
        flex-flow: column nowrap;

        a {
            font-size: 1.1rem;
        }
    }
`;