import styled from "styled-components";
import dom from "../../images/dom.svg";
import blok from "../../images/blok.svg";
import lokal from "../../images/lokal.svg";


export const Sekcja = styled.section`
    background: ${({ theme }) => theme.color.white};
    padding: 20px 50px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;    
`;

export const Kontener = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Informacja = styled.h2`
    text-transform: uppercase;
`;

export const Paragraf = styled.p`
    width: 300px;
    text-transform: uppercase;
`;

export const Rodzaje = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const Nieruchomości = styled.div`
    background: ${({ theme }) => theme.color.white};
    border-radius: 20px;
    padding: 10 px;
    margin: 10px;
    width: 200px;
    height: 350px;
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
    padding: 10px;
    font-weight: bold;
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





