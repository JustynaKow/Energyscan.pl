import styled from "styled-components";

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