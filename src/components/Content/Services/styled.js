import styled from "styled-components";
import circle from "../../../images/kolo.svg";

export const Description = styled.p`
    margin: 30px 20px;
    line-height: 1.5;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 10px;
    }
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
