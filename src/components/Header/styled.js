import styled from "styled-components";
import background from "../../images/tlo.svg";

export const StyledHeader = styled.header`
    background: center / cover no-repeat url("${background}");
    color: ${({ theme }) => theme.color.white};
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`;

export const Information = styled.article`
    background: rgb(226 177 50 / 67%);
    width: 500px;
    padding: 20px;
    margin: 20px auto;
    border-radius: 40px;
    display: flex;
    align-items: center;
`;

export const Paragraph = styled.p`
    margin: auto;
    text-align: center;
    font-size: 1.5em;
    line-height: 1.5;
`;

