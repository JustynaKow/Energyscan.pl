import styled from "styled-components";

export const Navigation = styled.nav`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: fixed;
    width: 100%;
    z-index: 2;
    border-bottom: 1px solid ${({ theme }) => theme.color.grey};
`;

export const Logo = styled.img`
    width: 300px;
`;

export const Wrapper = styled.aside`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        flex-direction: column;
        align-items: center;
        background-color: ${({ theme }) => theme.color.white};
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        padding: 20px;
        border-bottom: 1px solid ${({ theme }) => theme.color.grey};
    }
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

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
        display: block;
    }
`;

export const Hamburger = styled.img`
    width: 30px;
`;
