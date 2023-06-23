import styled from "styled-components";

export const Wrapper = styled.div`
    height: 200px;
    font-size: 2em;
    text-align: center;
    background-color: ${({ theme }) => theme.color.gamboge};
    color: ${({ theme }) => theme.color.white};
    display: flex;
    justify-content: center;
    align-items: center;
`;