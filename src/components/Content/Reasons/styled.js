import styled from "styled-components";

export const Article = styled.article`
    margin: 30px 20px;
    line-height: 1.5;
    max-width: 500px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 10px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 0 30px;
    justify-content: space-between;
`;

export const Photo = styled.img`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 300px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 20px;
`;

export const Element = styled.div`
    display: flex;
    align-items: center;
`;

export const Subtitle = styled.h3`
    text-transform: uppercase;
    font-size: 1rem;
    margin: 10px 20px;
`;

export const Paragraf = styled.p`
    line-height: 1.2;
    max-width: 400px;
    margin: 0 0 0 70px;
`;