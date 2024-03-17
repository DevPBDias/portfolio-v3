import styled from "styled-components";

export const PortContainer = styled.main`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    padding-inline: 10%;
    margin-block: 2em;
    gap: 2em;

    h4 {
        font-size: 3rem;
    }
`;

export const BtnsContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    gap: 4em;

    button {
        font-size: 1.3rem;
        height: 2em;
        border-radius: 12px;
        border: none;
        font-weight: 600;

        &:hover {
            color: #1C8CDF;
        }
    }
`;

export const ProjectsContainer = styled.section`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    gap: 1em;
`;
