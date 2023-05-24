import styled from "styled-components";

export const Container = styled.div`
    margin-top: 100vh;
    width: 100%;
    position: absolute;
    z-index: 2;
    background: ${({ theme }) => theme.color.white};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        position: static;
        margin-top: 0;
    }
`;

export const Section = styled.section`
    padding: 105px 100px 20px;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 10px;
    }
`;

export const Title = styled.h2`
    text-transform: uppercase;
    margin: 0 20px;
    font-size: 2.5rem;
    font-weight: normal;
    border-bottom: 5px solid ${({ theme }) => theme.color.husk};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 1.5rem;
    }
`;