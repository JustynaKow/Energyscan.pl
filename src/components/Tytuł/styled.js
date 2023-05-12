import styled from "styled-components";
import tło from "../../images/background.png";

export const StylledFront = styled.section`
    background: center / cover no-repeat url("${tło}");
    height: 490px; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: left;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        height: 200px; 
    }
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.black};
    text-transform: uppercase;
    font-size: 3.5em;
    margin: 20px 50px;
    max-width: 600px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 1.5em;
    }
`;

export const Subtitle = styled.h2`
    color: ${({ theme }) => theme.color.black};
    text-transform: uppercase;
    margin: 20px 50px;
`;