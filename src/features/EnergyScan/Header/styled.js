import styled from "styled-components";
import background from "../../../images/mobile.webp";

export const Element = styled.header`
  width: 100%;
  height: 100vh;
  padding: 100px 40px 0 40px;
  background: url(${background});
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 100px 0px 10px 0px;
    justify-content: center;
    background: none;

  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    padding: 100px 0px 10px 0px;
    background-position: 50% 60%;
  }
`;

export const Picture = styled.img`
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: block;
        max-width: 280px;
        margin: 0 auto;
  }
`;

export const Wrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    align-items: center;
  }
`;

export const Heading = styled.h1`
  font-size: 48px;
  line-height: 1.3;
  text-transform: uppercase;
  max-width: 700px;
  text-align: left;
  margin-left: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10px;
`;

export const Subheading = styled.h2`
  margin: 10px;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Dot = styled.span`
  color: ${({ theme }) => theme.color.red};
  font-size: 48px;
  margin: 0 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 0;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.gamboge};
  padding: 15px 10px;
  border-radius: 10px;
  border: none;
  margin: 10px;
  width: 230px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 10px;
  }
`;

export const Link = styled.a`
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
`;
