import styled from "styled-components";

export const Navigation = styled.nav`
    background: rgb(27 27 27 / 25%);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: relative;
    width: 100%;
    z-index: 2;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.img`
    object-fit: cover;
    transform: scale(1.4);
`;

export const Link = styled.a`
    margin: 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    text-transform: uppercase;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.color.husk};
    };
`;