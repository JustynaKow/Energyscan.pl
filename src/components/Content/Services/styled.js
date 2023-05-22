import styled from "styled-components";
import circle from "../../../images/kolo.svg";


export const Wrapper = styled.section`
    padding: 105px 100px 20px;
    width: 100%;
`;

export const Title = styled.h2`
    text-transform: uppercase;
    margin: 0 20px;
    font-size: 2.5rem;
    font-weight: normal;
    border-bottom: 5px solid ${({ theme }) => theme.color.husk};
`;

export const Description = styled.p`
    margin: 50px 40px;
    line-height: 1.5;
    text-align: justify;
`;

export const Object = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: center;
`;

export const Circle = styled.div`
    background: center / cover no-repeat url("${circle}");
    height: 200px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;

export const Subtitle = styled.h3`
    width: 150px;
`;
