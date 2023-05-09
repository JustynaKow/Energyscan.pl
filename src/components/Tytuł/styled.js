import styled from "styled-components";
import tło from "../../images/background1.svg";

export const StylledFront = styled.section`
    background: right / contain no-repeat url("${tło}");
    height: 470px; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: left;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.husk};
    text-transform: uppercase;
    font-size: 3em;
    margin: 20px 50px;
`;

export const Subtitle = styled.h2`
    color: ${({ theme }) => theme.color.black};
    text-transform: uppercase;
    font-weight: normal;
    margin: 20px 50px;
`;