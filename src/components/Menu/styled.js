import styled from "styled-components";
import firma from "../../images/energyscan.png";

export const Kontener = styled.header`
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 80px;
    position: sticky;
    top: 0;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.div`
    background: center / contain no-repeat url("${firma}");
    width: 300px;
    height: 100px;
`;

export const Navigation = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;
`;

export const List = styled.li`
    margin: 10px;
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};

    &:hover{
        color: ${({ theme }) => theme.color.husk};
    }
`;