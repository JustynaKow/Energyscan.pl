import styled from "styled-components";

export const Subtitle = styled.h3`
    text-transform: uppercase;
    margin: 20px -20px;
    max-width: 300px;
`;

export const Wrapper = styled.div`
    margin: 50px 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`; 

export const Object = styled.div`
    display: flex;
    align-items: center;
`;

export const List = styled.ul`
    width: 350px;
    height: 250px;
    line-height: 1.5;
    padding: 0;
    margin: 0 auto;
    text-align: justify;
`;

export const Item = styled.li`
    list-style: circle;
`;