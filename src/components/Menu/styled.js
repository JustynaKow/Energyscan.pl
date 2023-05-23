import styled from "styled-components";

export const Navigation = styled.nav`
    background: rgb(27 27 27 / 25%);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: fixed;
    width: 100%;
    z-index: 4;
    `;

export const Logo = styled.img`
    width: 300px;
    height: 100px;
    object-fit: cover;
    transform: scale(1.4);
`;

export const Icon = styled.img`
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 2;

    &:hover{
        transform: scale(1.2);
    }
`;

export const Link = styled.a`
    margin: 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    text-transform: uppercase;
    font-weight: bold;

    &:hover{
        color: ${({ theme }) => theme.color.husk};
    }
`;