import styled from "styled-components";

export const Paragraph = styled.p`
    line-height: 1.5;
    margin: 30px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 10px;
    }
`;

export const Article = styled(Paragraph)`
    text-align: center;
    margin-top: 50px;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px 30px;
    flex-wrap: wrap;
`;

export const Element = styled.div`
    border-radius: 20px;
    padding: 10px;
    margin: 10px 0;
    width: 300px;
    height: 300px;
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Subtitle = styled.h3`
    margin: 20px;
    text-transform: uppercase;
`;

export const Cost = styled.div`
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.husk};
    color: ${({ theme }) => theme.color.white};
    border: 2px solid ${({ theme }) => theme.color.husk};
    margin: 20px;
    width: 200px;
    padding: 10px;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;

    &:hover {
        background-color: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.husk};
        border: 2px solid ${({ theme }) => theme.color.husk};
    }
`;

export const Image = styled.img`
    width: 150px;
`;
