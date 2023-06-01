import styled from "styled-components";

export const Description = styled.p`
    margin: 30px 20px;
    line-height: 1.5;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 10px;
    }
`;

export const Subtitle = styled.h3`
    text-transform: uppercase;
    margin: 20px;
`;

export const Photo = styled.img`
    width: 50px;
`;

export const Wrapper = styled.div`
    margin: 50px 20px;
    display: grid;
    grid-template-columns: 1fr auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }        
`;

export const Object = styled.div`
    display: flex;
    align-items: center;
`;

export const Images = styled.img`
    width: 300px;
`

export const List = styled.p`
    max-width: 500px;
    line-height: 1.5;
    padding: 0;
`;

export const Item = styled.li`
    list-style: none;
`;