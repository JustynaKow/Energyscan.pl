import styled from "styled-components";
import logo from "../../images/logo.png";

export const Wrapper = styled.header`
    display: flex;
    flex: 1 auto;
    justify-content: space-between;
    height: 100px; 
    background: ${({ theme }) => theme.color.white};
`;

export const Logo = styled.div`
    background: left / cover no-repeat url("${logo}");
    width: 300px;
    margin: -20px;
`;

export const Navigation = styled.ul`
    color: ${({ theme }) => theme.color.eveningSea};
    list-style-type: none;
    margin: auto 0;
    padding: 0 100px;
    display: flex;
    justify-content: space-evenly;
    text-transform: uppercase;
`;

export const List = styled.li`
    display: inline-block;
    margin: 10px;
`;