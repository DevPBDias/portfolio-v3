import styled from "styled-components";

export const CardContainer = styled.section`
    width: 30em;
    height: 30em;
    display: flex;
    flex-flow: column nowrap;
    border: 1px solid #F3ECF0;
    border-radius: 8px;
`;

export const TextContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    padding: 0.5em;
    border-radius: 8px;

    .year {
        width: 4em;
        font-size: .8rem;
        text-align: center;
        background-color: #716968;
        padding: 0.3em;
        border-radius: 4px;
    }

    h6 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #1C8CDF;
    }

    .main_txt_content {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        gap: 1em;

        p {
            font-size: 1rem;
            text-align: justify;
        }
    }
        
    a {
        font-size: 1rem;
        width: 7em;
        height: 1.6em;
        border-radius: 8px;
        border: none;
        background-color: #D0777D;
        color: #0A090A;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background-color: #1C8CDF;
            color: #F3ECF0;
        }
    }
`;

export const TechsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    gap: .5em;

    span {
        font-size: .8rem;
        text-align: center;
        background-color: #716968;
        padding: 0.3em;
        border-radius: 4px;
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 50%;

    img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }
`;


