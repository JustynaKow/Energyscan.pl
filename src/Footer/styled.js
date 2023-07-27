import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  background: ${({ theme }) => theme.color.gamboge};
  color: ${({ theme }) => theme.color.white};
  font-size: 1.2rem;
  text-transform: uppercase;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Logo = styled.img`
  object-fit: cover;
  transform: scale(1.5);
  position: relative;
  z-index: 1; 
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
  position: relative; 
  z-index: 2; 

  &:hover {
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;