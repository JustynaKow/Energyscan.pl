import styled from "styled-components";
import background from "../../images/background2.svg";

export const StyledHeader = styled.header`
    background: center / cover no-repeat url("${background}");
    box-shadow: 0px 7px 20px ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
  `;

export const Information = styled.article`
    background: rgba(255,255,255,0.25);
    width: 500px;
    height: 50px;
    margin: 20px auto;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.color.white};
    display: flex;
    align-items: center;
`; 

export const Paragraph = styled.p`
    margin: auto;
    font-weight: bold;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
`;

export const Object = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const Photo = styled.img`
    width: 70px;
    height: 70px;
`;

export const Article = styled.p`
    max-width: 300px;
    text-align: center;
`;