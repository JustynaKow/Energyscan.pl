import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Wrapper = styled.div`
    max-width: 300px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Image = styled.img`
    width: 180px;
`;

export const Subtitle = styled.h3`
    text-transform: uppercase;
    font-size: 1rem;
    text-align: center;
`;

export const Paragraf = styled.p`
    line-height: 1.2;
    max-width: 400px;
    text-align: center;
`;