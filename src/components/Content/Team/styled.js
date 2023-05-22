import styled from "styled-components";

export const Wrapper = styled.div`
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

export const Icon = styled.img`
    width: 40px;
`;

export const Subtitle = styled.h3`
    text-transform: uppercase;
    font-size: 1rem;
    margin: 0 20px;
`;

export const Object = styled.div`
    display: flex;
    margin: 20px;
    align-items: center;
`;

export const Article = styled.p`
    text-align: justify;
    line-height: 1.5;
    padding: 0px 70px;
`;
