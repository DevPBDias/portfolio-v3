import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-items: center;
    padding-inline: 10%;
`;

export const NavbarContainer = styled.nav`
    width: 90%;
    height: 10vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    justify-items: center;
    gap: 3em;

    .links {
        font-size: 1.5rem;
        font-weight: 600;

        &:hover {
            color: #1C8CDF;
        }


    }

    button {
        font-size: 1.3rem;
        padding: 0.5em;
        border-radius: 12px;
        border: none;
        background-color: #D0777D;
        color: #0A090A;
        font-weight: 600;

        &:hover {
            background-color: #1C8CDF;
            color: #F3ECF0;
        }
    }

    @media screen and (max-width: 750px){
        .links {
            font-size: 1.2rem;
        }

        button {
        font-size: 1.3rem;
        width: 8em;
        height: 2em;
        border-radius: 12px;
        border: none;
        background-color: #D0777D;
        color: #0A090A;
        font-weight: 600;

        &:hover {
            background-color: #1C8CDF;
            color: #F3ECF0;
        }
    }

        
    }

    @media screen and (max-width: 550px){
        justify-content: center;
        gap: 1em;
        width: 100%;

        button {
        font-size: 1rem;
        width: 6em;
        height: 2em;
        padding: 0.5em;
        border-radius: 12px;
    }

    }
`;