import styled from "styled-components";
import logo from "../../images/logo.png";

export const Wrapper = styled.header`
    display: flex;
`;

export const Logo = styled.div`
    background: left, contain, no-repeat url("${logo}");
    max-width: 200px;
`;

export const Navigation = styled.nav`
    color: ${({ theme }) => theme.color.black};
`;