import styled from "styled-components";

export const Wrapper = styled.aside`
    position: fixed;
    padding: 0 20px;
    z-index: 2;
    right: 0;
    bottom: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 0 10px;
    }
`;

export const Icon = styled.img`
    width: 50px;
    height: 50px;
    margin: 10px;
    transition: 0.5s linear;

    &:hover{
        transform: scale(1.5);
    }
`;