import styled from "styled-components";

export const Section = styled.section`
    padding: 105px 100px 20px;
    width: 100%;
`;

export const Title = styled.h2`
    text-transform: uppercase;
    margin: 0 20px;
    font-size: 2.5rem;
    font-weight: normal;
    border-bottom: 5px solid ${({ theme }) => theme.color.husk};
`;

export const Article = styled.article`
    margin: 50px 40px;
    line-height: 1.5;
    text-align: justify;
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
    margin: 50px 40px;
`;

export const Element = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const Subtitle = styled.h3`
    text-transform: uppercase;
    font-size: 1rem;
    margin: 0 20px;
`;

export const Paragraf = styled.p`
    text-align: justify;
    line-height: 1.5;
    padding: 0px 70px;
    max-width: 700px;
`;

export const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 2px 1px 10px ${({ theme }) => theme.color.husk};
`;