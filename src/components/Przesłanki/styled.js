import styled from "styled-components";
import foto from "../../images/foto.svg";
import rent from "../../images/rent.svg";
import sale from "../../images/sale.svg";
import sell from "../../images/sell.svg";

export const Kontener = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px 50px;
    grid-gap: 20px;
`;

export const Tytuł = styled.h2`
    text-transform: uppercase;
    text-align: center;
    color: ${({theme}) => theme.color.eveningSea};
`;

export const Warunek = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Podtytuł = styled.h3`
    text-transform: uppercase;
    margin: 20px;
    padding: 10px;
    font-weight: bold;
`;

export const Sprzedaż = styled.div`
    background: center / contain no-repeat url("${sale}") ${({theme}) => theme.color.husk};
    border-radius: 50%;
    width: 50px;
    height: 50px;
`;

export const Opis = styled.p`
`;

export const Wynajem = styled.div`
    background: center / contain no-repeat url("${rent}") ${({theme}) => theme.color.husk};
    border-radius: 50%;
    width: 50px;
    height: 50px;
`;

export const Budowa = styled.div`
    background: center / contain no-repeat url("${sell}") ${({theme}) => theme.color.husk};
    border-radius: 50%;
    width: 50px;
    height: 50px;
`;

export const Dofinansowanie = styled.div`
    background: center / contain no-repeat url("${foto}") ${({theme}) => theme.color.husk};
    border-radius: 50%;
    width: 50px;
    height: 50px;
`;