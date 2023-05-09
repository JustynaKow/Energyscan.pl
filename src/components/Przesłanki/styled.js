import styled from "styled-components";
import foto from "../../images/foto.svg";
import rent from "../../images/rent.svg";
import sell from "../../images/house.svg";
import sale from "../../images/sell.svg";
import tlo from "../../images/tlo.png";

export const Sekcja = styled.section`
    background: center / contain no-repeat url("${tlo}");
    color: ${({theme}) => theme.color.white};
    padding: 50px;
`;

export const Kontener = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 50px 0;
    grid-gap: 20px;
`;

export const Tytuł = styled.h2`
    text-transform: uppercase;
    text-align: center;
`;

export const Warunek = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Podtytuł = styled.h3`
    text-transform: uppercase;
    color: ${({theme}) => theme.color.black};
    margin: 20px;
    padding: 10px;
    font-weight: bold;
`;

export const Opis = styled.p`
`;

export const Sprzedaż = styled.div`
    background: center / contain no-repeat url("${sale}");
    width: 100px;
    height: 100px;

    &:hover {
        transform: scale(1.1);
    }
`;

export const Wynajem = styled.div`
    background: center / contain no-repeat url("${rent}");
    width: 100px;
    height: 100px;

    &:hover {
        transform: scale(1.1);
    }
`;

export const Budowa = styled.div`
    background: center / contain no-repeat url("${sell}");
    width: 100px;
    height: 100px;

    &:hover {
        transform: scale(1.1);
    }
`;

export const Dofinansowanie = styled.div`
    background: center / contain no-repeat url("${foto}");
    width: 100px;
    height: 100px;

    &:hover {
        transform: scale(1.1);
    }
`;