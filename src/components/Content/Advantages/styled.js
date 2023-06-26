import styled from "styled-components";

export const Subtitle = styled.h3`
    text-transform: uppercase;
    font-size: 1em;
    text-align: center;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 100px 20px;
`;

export const Element = styled.div`
    width: 200px;
    text-align: center;
    border: 2px solid ${({ theme }) => theme.color.husk};
    border-radius: 5px;
    margin: 10px;
    padding: 20px;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Image = styled.img`
    width: 70px;
    height: 70px;
    margin: 0 auto;
`;