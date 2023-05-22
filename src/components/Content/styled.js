import styled from "styled-components";

export const Container = styled.div`
    margin-top: 100vh;
    width: 100%;
    position: absolute;
    z-index: 2;
    background: ${({ theme }) => theme.color.white};
`;