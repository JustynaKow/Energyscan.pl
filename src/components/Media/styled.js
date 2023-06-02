import styled from "styled-components";

export const Wrapper = styled.aside`
    position: fixed;
    z-index: 3;
    padding: 0 20px;
    right: 0;
    bottom: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 0 10px;
    }
`;

export const Icon = styled.img`
    margin: 10px;
    transition: 0.5s linear;

    &:hover{
        transform: scale(1.3);
        filter: brightness(110%);
    }
`;