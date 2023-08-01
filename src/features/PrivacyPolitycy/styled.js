import styled from "styled-components";
import {Link} from "react-router-dom";

export const Wrapper = styled.section`
    padding: 40px 20px;
    max-width: 1200px;
`;

export const Paragraph = styled.div`
    text-align: left;
    max-width: 1000px;
    margin: 0 auto;
    line-height: 1.5;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.red};
    font-size: 24px;
    border-radius: 50%;
    margin: 10px;
    padding: 20px;
`;

export const Container = styled.div`
    text-align: left;
    padding: 20px;
`;