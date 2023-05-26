import styled from "styled-components";
import background from "../../images/tlo.svg";

export const Wrapper = styled.header`
    background: center / cover no-repeat url("${background}");
    color: ${({ theme }) => theme.color.white};
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 120px 10px 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        position: static;
        height: 100%;
    }
`;

export const Heading = styled.h1`
    font-size: 3em;
    font-weight: normal;
    text-transform: uppercase;
    max-width: 900px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 1.5em;
    }
`;

export const Subheading = styled.h2`
    margin: 10px;
    font-weight: normal;
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

export const Paragraph = styled.p`
    background: rgb(226 177 50 / 67%);
    border-radius: 40px;
    max-width: 500px;
    padding: 20px;
    text-align: center;
    font-size: 1.5em;
    line-height: 1.5;
`;