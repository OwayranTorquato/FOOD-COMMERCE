import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.footer`
    padding-top: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        background: ${({ theme }) => theme.colors.red};
        width: 100%;
        max-width: 16.5rem;
        min-height: 4rem;

        border: none;
        border-radius: 8px;

        font-weight: 700;
        font-size: 1.25rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.white};

        transition: background 0.3s;

        &:hover{
            background: ${darken(0.1, '#AA2424')};
        }
    }

    span{
        font-weight: 500;
        text-transform: uppercase;

        strong {
            margin-left: 0%.755rem;
            font-size: 2.25rem;
            font-weight: 700;
        }
    }
`