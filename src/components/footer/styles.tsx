import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    padding-inline: 10%;
    border-top: 1px solid red;
`;

export const TextContainer = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;

    span {
    }
`;

export const IconsContainer = styled.nav`
    width: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    justify-items: center;

    .icons {
        width: 2.5em;
        height: 2.5em;

        img {
            width: 100%;
            height: 100%;
        }
    }
`;