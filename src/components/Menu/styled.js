import styled from "styled-components";

export const Kontener = styled.header`
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
`;

export const Logo = styled.div`
    font-size: large;
`;

export const Navigation = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    text-transform: uppercase;
`;

export const List = styled.li`
    margin: 10px;
`;