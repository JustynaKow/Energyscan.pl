import styled from "styled-components";

export const Article = styled.article`
    margin: 30px 20px;
    line-height: 1.5;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 10px;
    }
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Photo = styled.img`
    width: 300px;
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
    margin: 0 20px;
`;

export const Paragraf = styled.p`
    line-height: 1.2;
    max-width: 700px;
    margin: 20px 0;
`;

export const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 2px 1px 10px ${({ theme }) => theme.color.husk};
`;
