import styled from "styled-components";

export const Section = styled.section`
    padding: 100px 20px 0 20px;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 10px;
    }
`;

export const Title = styled.h2`
    text-transform: uppercase;
    max-width: 800px;
    margin: 20px auto;
    font-size: 2rem;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 1.5rem;
    }
`;

export const Article = styled.p`
    margin: 30px auto;
    max-width: 900px;
    line-height: 1.5;
    text-align: center;
`;