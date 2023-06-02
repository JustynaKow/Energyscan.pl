import styled from "styled-components";

export const Subtitle = styled.h3`
    text-transform: uppercase;
    font-size: 1rem;
    margin: 0 20px;
`;

export const Object = styled.div`
    display: flex;
    margin: 20px 30px;
    align-items: center;
`;

export const Article = styled.p`
    text-align: justify;
    line-height: 1.5;
    padding: 0px 90px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 0px 10px;
    }
`;
