import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-items: center;
    padding-inline: 10%;
    border-bottom: 1px solid red;
`;

export const NavbarContainer = styled.nav`
    margin-left: 65%;
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
`;