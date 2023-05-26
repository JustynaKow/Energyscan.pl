import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;

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
    height: 50px;
    border-radius: 50%;
    box-shadow: 2px 1px 10px ${({ theme }) => theme.color.husk};
`;

export const Paragraph = styled.h5`
    max-width: 400px;
    font-size: 1em;
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