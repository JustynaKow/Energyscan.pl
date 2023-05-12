import styled from "styled-components";

export const Wrapper = styled.div`
    background: ${({ theme }) => theme.color.black};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 5px 20px;
    text-transform: uppercase;
    font-size: 14px;
    flex-wrap: wrap;
`;

export const Paragraph = styled.p`
    margin: 0 10px;
    color: ${({ theme }) => theme.color.white};
`;

export const Phone = styled.a`
    margin: 0 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    font-weight: bold;

    &:hover{
        color: ${({ theme }) => theme.color.husk};
    };
`;