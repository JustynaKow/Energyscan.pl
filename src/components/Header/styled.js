import styled from "styled-components";
import background from "../../images/background.jpg";

export const Wrapper = styled.header`
    background: center / cover no-repeat url("${background}");
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 120px 10px 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        background-attachment: scroll;
    }
`;

export const Heading = styled.h1`
    font-size: 3rem;
    text-transform: uppercase;
    max-width: 900px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 1.5rem;
    }
`;

export const Subheading = styled.h2`
    margin: 10px;
    text-transform: uppercase;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const Dot = styled.span`
    color: ${({ theme }) => theme.color.husk};
    font-size: 3rem;
    margin: 0 10px;
`;