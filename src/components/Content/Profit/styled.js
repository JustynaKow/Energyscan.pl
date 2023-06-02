import styled from "styled-components";

export const Article = styled.p`
    line-height: 1.5;
    margin: 30px 20px;
`;

export const ArticleLast= styled(Article)`
    text-align: center;
    font-weight: bold;
    margin-top: 50px;
`;

export const Wrapper = styled.div`
    margin: 30px 20px;
    line-height: 1.5;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

export const Container = styled.div`
    max-width: 300px;
    box-shadow: -4px 4px 23px -7px rgba(66, 68, 90, 0.58);
    border-radius: 15px;
    border-top: 15px solid ${({ theme }) => theme.color.husk};
    padding: 10px 20px;
    margin: 20px;
`;