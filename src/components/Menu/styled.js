import styled from "styled-components";

export const Navigation = styled.header`
    background: ${({ theme }) => theme.color.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.25);
    position: sticky;
    top: 0px;
`;

export const Logo = styled.img`
    width: 300px;
`;

export const Link = styled.a`
    margin: 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};
    text-transform: uppercase;
    font-weight: bold;

    &:hover{
        color: ${({ theme }) => theme.color.husk};
    }
`;