import styled from "styled-components";
import dom from "../../images/dom.png";

export const Sekcja = styled.section`
    background: ${({ theme }) => theme.color.cararra};
    padding: 20px 50px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;    
`;

export const Kontener = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const Informacja = styled.h2`
    margin: 0;
    text-transform: uppercase;
`;

export const Paragraf = styled.p`
    width: 300px;
`;

export const Rodzaje = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const Nieruchomości = styled.div`
    background: ${({ theme }) => theme.color.white};
    border-radius: 20px;
    padding: 100px 60px;
    margin: 20px;
    width: 200px;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.25);
`;

export const Tytuł = styled.h3`

`;

export const Opis = styled.p`

`;

export const IkonaDomu = styled.div`
    background-image: url("${dom}");
    height: 200px;
`;





