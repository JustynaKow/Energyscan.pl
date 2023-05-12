import styled from "styled-components";
import tlo from "../../images/tlo.png";

export const Section = styled.section`
    background: center / cover no-repeat url("${tlo}");
    color: ${({theme}) => theme.color.white};
    padding-top: 105px;
`;

export const Title = styled.h2`
    text-transform: uppercase;
    text-align: center;
    margin: 0 20px;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 40px 50px;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    justify-content: center;
    }
`;

export const Element = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Subtitle = styled.h3`
    text-transform: uppercase;
    color: ${({theme}) => theme.color.black};
    margin: 20px;
    font-weight: bold;
    text-align: center;
`;

export const Paragraf = styled.p`
    margin: 0;
    text-align: justify;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;

    &:hover {
        transform: scale(1.1);
    }
`;
