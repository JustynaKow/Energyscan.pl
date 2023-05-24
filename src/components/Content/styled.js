import styled from "styled-components";

export const Container = styled.div`
    margin-top: 100vh;
    width: 100%;
    position: absolute;
    z-index: 2;
    background: ${({ theme }) => theme.color.white};
`;

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