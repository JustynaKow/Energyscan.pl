import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 20px;
    width: 100%;
    background: ${({ theme }) => theme.color.gamboge};
    color: ${({ theme }) => theme.color.white};
    font-size: 1.2rem;
    text-transform: uppercase;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 20px;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;   
    }
`;

export const Logo = styled.img`
    object-fit: cover;
    transform: scale(1.5);
`;

export const Object = styled.div`
    max-width: 700px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const Icon = styled.img`
    margin: 10px 20px;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover{
        text-decoration: underline;
    }
`;