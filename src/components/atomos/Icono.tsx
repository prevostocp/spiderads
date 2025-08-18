import { styled } from "styled-components";

interface IconoProps {
    $fontSize?: string;
    $color?: string;
}

export const Icono = styled.span<IconoProps>`
    display: flex;
    align-items: center;
    text-align: center;
    font-size: ${(props) => props.$fontSize || "20px"};
    color: ${(props) => props.$color || "black"};
`;