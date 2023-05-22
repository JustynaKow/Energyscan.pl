import styled from "styled-components";

export const Wrapper = styled.div`
    height: 400px;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        height: 200px; 
    }
`;

export const Heading = styled.h1`
    font-size: 3em;
    font-weight: normal;
    margin: 50px 50px 0;
    max-width: 900px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 1.5em;
    }
`;

export const Subheading = styled.h2`
    margin: 20px 50px;
    font-weight: normal;
`;

export const Dot = styled.p`
    color: ${({ theme }) => theme.color.husk};
    font-weight: bold;
`;

export const Paragraph = styled.div`
    display: flex;
    align-items: center;
`;