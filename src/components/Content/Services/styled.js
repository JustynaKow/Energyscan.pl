import styled from "styled-components";

export const Description = styled.p`
    margin: 30px;
    line-height: 1.5;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 10px;
    }
`;

export const Subtitle = styled.h3`
    text-transform: uppercase;
    margin: 20px;
`;

export const Wrapper = styled.div`
    margin: 50px 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`; 

export const Object = styled.div`
    display: flex;
    align-items: center;
`;

export const List = styled.ul`
    max-width: 700px;
    line-height: 1.5;
    padding: 0;
`;

export const Item = styled.li`
    list-style: none;
`;