import styled from "styled-components";
import foto from "../../images/foto.svg";
import rent from "../../images/rent.svg";
import sell from "../../images/house.svg";
import sale from "../../images/sell.svg";
import tlo from "../../images/tlo.png";

export const Sekcja = styled.section`
    background: center / cover no-repeat url("${tlo}");
    color: ${({theme}) => theme.color.white};
    padding: 50px;
`;

export const Kontener = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 50px 0;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    justify-content: center;
    }
`;

export const Tytuł = styled.h2`
    padding-top: 80px;
    text-transform: uppercase;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding-top: 0px;
        margin: 0;
    }
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
    text-align: center;
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