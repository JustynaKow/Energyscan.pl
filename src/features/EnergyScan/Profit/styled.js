import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 30px;
    line-height: 1.5;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Container = styled.div`
    max-width: 300px;
    border: 2px solid ${({ theme }) => theme.color.husk};
    border-radius: 5px;
    border-top: 15px solid ${({ theme }) => theme.color.husk};
    padding: 10px 20px;
    margin: 20px;
`;