import styled from "styled-components";

export const Wrapper = styled.div`
    height: 350px;
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
    font-size: 2.5em;
    font-weight: normal;
    margin: 50px 50px 0;
    max-width: 900px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 1.5em;
    }
`;

export const Subheading = styled.h2`
    margin: 20px 50px;
`;