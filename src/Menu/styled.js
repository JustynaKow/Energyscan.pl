import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navigation = styled.nav`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: fixed;
    width: 100%;
    z-index: 2;
    border-bottom: 1px solid ${({ theme }) => theme.color.grey};
`;

export const Logo = styled.img`
    object-fit: cover;
    transform: scale(1.5);
`;

export const MenuLink = styled.a`
    margin: 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
        color: ${({ theme }) => theme.color.husk};
    };
`;

export const StyledLink = styled(Link)`
    margin: 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
        color: ${({ theme }) => theme.color.husk};
    };
`