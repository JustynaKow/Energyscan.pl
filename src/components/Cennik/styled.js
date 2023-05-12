import styled from "styled-components";

export const Section = styled.section`
    padding: 105px 50px 0;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
`;

export const Title = styled.h2`
    margin: 0;
    padding-bottom: 10px;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    flex-wrap: wrap;
`;

export const Element = styled.div`
    background: ${({ theme }) => theme.color.white};
    border-radius: 20px;
    padding: 10px;
    margin: 10px 0;
    width: 300px;
    height: 300px;
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Subtitle = styled.h3`
    margin: 20px;
`;

export const Price = styled.div`
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.husk};
    margin: 20px;
    width: 200px;
    padding: 10px;
    color: ${({ theme }) => theme.color.white};
    border: 2px solid ${({ theme }) => theme.color.husk};

    &:hover {
        background-color: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.husk};
        border: 2px solid ${({ theme }) => theme.color.husk};
    }
`;

export const Image = styled.img`
    width: 150px;
`;