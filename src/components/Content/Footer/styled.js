import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 20px 100px;
    width: 100%;
    background: ${({ theme }) => theme.color.husk};
    color: ${({ theme }) => theme.color.white};
    font-weight: bold;
`;

export const Title = styled.h2`
    text-transform: uppercase;
    margin: 0 20px;
    font-size: 2.5rem;
    font-weight: normal;
`;

export const Icon = styled.img`
    width: 40px;
    margin: 10px 20px;
`;

export const Object = styled.div`
    display: flex;
    align-items: center;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
`;