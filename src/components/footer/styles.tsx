import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    padding-inline: 10%;
    gap: 2em;

    @media screen and (max-width: 750px){
        flex-flow: column-reverse nowrap;
    }

    @media screen and (max-width: 550px){
    }
`;

export const TextContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;

    @media screen and (max-width: 850px){
        span {
            font-size: .8rem;
        }
    }
`;

export const IconsContainer = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap: 1em;

    .icons {
        width: 2.5em;
        height: 2.5em;

        img {
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (max-width: 550px){
        .icons {
            width: 2em;
            height: 2em;
        }
    }
`;