import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px 30px;
    flex-wrap: wrap;
`;

export const Element = styled.div`
    width: 300px;
    height: 300px;
    border: 3px solid ${({ theme }) => theme.color.husk};
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin: 10px;
`;

export const Container = styled.div`
    background-color: ${({ theme }) => theme.color.light};
    border-radius: 5px;
    width: 250px;
    height: 250px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Subtitle = styled.h3`
    margin: 20px;
    text-transform: uppercase;
`;

export const Cost = styled.div`
    background-color: ${({ theme }) => theme.color.husk};
    color: ${({ theme }) => theme.color.white};
    box-shadow: 1px 3px 27px 1px rgba(252, 197, 33, 0.45);
    border-radius: 5px;
    margin: 10px;
    width: 200px;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px;
`;

export const Image = styled.img`
    width: 100px;
`;