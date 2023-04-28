import styled from "styled-components";
import background from "../../images/background.png";

export const StylledFront = styled.section`
    background: left / cover no-repeat url("${background}");
    height: 400px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.eveningSea};
    text-transform: uppercase;
    font-size: 3em;
    margin: 20px 50px;
`;

export const Subtitle = styled.h2`
    text-transform: uppercase;
    font-weight: normal;
    margin: 20px 50px;
`;