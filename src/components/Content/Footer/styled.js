import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 20px;
    width: 100%;
    background: ${({ theme }) => theme.color.gamboge};
    color: ${({ theme }) => theme.color.white};
    font-size: 1.2rem;
    text-transform: uppercase;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;   
    }
`;

export const Logo = styled.img`
    width: 300px;
    height: 100px;
    object-fit: cover;
    transform: scale(1.5);
`;

export const Object = styled.div`
    max-width: 700px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const Title = styled.h2`
    font-size: 2rem;
    font-weight: normal;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 1rem;
    }

`;

export const Icon = styled.img`
    width: 40px;
    margin: 10px 20px;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
`;