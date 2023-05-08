import styled from "styled-components";

export const StylledFront = styled.section`
    background: ${({ theme }) => theme.color.black};
    height: 400px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.white};
    text-transform: uppercase;
    font-size: 3em;
    margin: 20px 50px;
`;

export const Subtitle = styled.h2`
    color: ${({ theme }) => theme.color.white};
    text-transform: uppercase;
    font-weight: normal;
    margin: 20px 50px;
`;