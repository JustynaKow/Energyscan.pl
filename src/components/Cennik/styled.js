import styled from "styled-components";
import dom from "../../images/dom.svg";
import blok from "../../images/blok.svg";
import lokal from "../../images/lokal.svg";

export const Sekcja = styled.section`
    padding: 20px 50px; 
    text-align: center;
`;

export const Informacja = styled.h2`
    text-transform: uppercase;
`;

export const Paragraf = styled.p`
    text-transform: uppercase;
    font-weight: bold;
`;

export const Rodzaje = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Nieruchomości = styled.div`
    background: ${({ theme }) => theme.color.white};
    border-radius: 20px;
    padding: 10 px;
    margin: 10px;
    width: 300px;
    height: 300px;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Tytuł = styled.h3`
    text-transform: uppercase;
    margin: 20px;

`;

export const Opis = styled.div`
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.husk};
    text-transform: uppercase;
    margin: 20px;
    width: 200px;
    padding: 10px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.white};
    border: 2px solid ${({ theme }) => theme.color.husk};

    &:hover {
        background-color: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.husk};
        border: 2px solid ${({ theme }) => theme.color.husk};
    }
`;

export const Dom = styled.div`
    background: center / contain no-repeat url("${dom}");
    width: 150px;
    height: 150px;
`;

export const Mieszkanie = styled.div`
    background: center / contain no-repeat url("${blok}");
    width: 150px;
    height: 150px;
`;

export const Lokal = styled.div`
    background: center / contain no-repeat url("${lokal}");
    width: 150px;
    height: 150px;
`;





