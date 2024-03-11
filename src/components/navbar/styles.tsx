import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-items: center;
`;

export const NavbarContainer = styled.nav`
    width: 50%;
    margin-left: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    justify-items: center;

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