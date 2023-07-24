import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.footer`
  padding: 20px;
  width: 100%;
  background: ${({ theme }) => theme.color.gamboge};
  color: ${({ theme }) => theme.color.white};
  font-size: 1.2rem;
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Logo = styled.img`
  object-fit: cover;
  transform: scale(1.5);
`;

export const Object = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Icon = styled.img`
  margin: 10px 20px;
`;

export const Hyperlink = styled.a`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
