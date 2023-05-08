import styled from "styled-components";

export const Wstęp = styled.div`
    background: ${({ theme }) => theme.color.husk};
    color: ${({ theme }) => theme.color.white};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 50px;
    text-transform: uppercase;
    font-size: 14px;
`;

export const Pytania = styled.p`
    margin: 0 10px;
`;

export const Telefon = styled.a`
    margin: 0 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    font-weight: bold;

    &:hover{
        color: ${({ theme }) => theme.color.black};
    };
`;