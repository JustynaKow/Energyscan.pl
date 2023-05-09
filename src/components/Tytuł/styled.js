import styled from "styled-components";
import tło from "../../images/background.png";

export const StylledFront = styled.section`
    background: center / cover no-repeat url("${tło}");
    height: 450px; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: left;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.black};
    text-transform: uppercase;
    font-size: 3.5em;
    margin: 20px 50px;
    width: 700px;
`;

export const Subtitle = styled.h2`
    color: ${({ theme }) => theme.color.black};
    text-transform: uppercase;
    margin: 20px 50px;
`;