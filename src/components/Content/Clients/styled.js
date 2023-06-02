import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Case = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const Wrapper = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
`;

export const Photo = styled.img`
    width: 50px;
`;

export const Paragraph = styled.h4`
    max-width: 400px;
    font-size: 1rem;
    text-transform: uppercase;
    margin: 10px 20px;
`;

export const Image = styled.img`
    width: 500px;
    border-radius: 40%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 300px;
    }
`;

export const Article = styled.p`
    max-width: 500px;
    margin: 30px 0;
    line-height: 1.5;
`;