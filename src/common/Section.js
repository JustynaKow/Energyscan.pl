import styled from "styled-components";

export const Section = styled.section`
    padding: 100px 20px 0 20px;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 10px;
    }
`;