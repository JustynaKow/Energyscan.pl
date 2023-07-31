import styled from "styled-components";

export const Wrapper = styled.aside`
    position: fixed;
    padding: 5px 20px;
    z-index: 2;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 5px 10px;
    }
`;

export const Icon = styled.img`
    width: 50px;
    margin: 5px;
    transition: 0.5s linear;

    &:hover{
        transform: scale(1.1);
    }
`;