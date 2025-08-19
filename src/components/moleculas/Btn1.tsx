import styled from "styled-components";
import { ReactNode } from "react";
import { Icono } from "../../index";

// Definición de props con typescript
interface Btn1Props {
    funcion?: () => void;
    titulo?: string;
    bgcolor?: string;
    icono?: ReactNode;
    url?: string;
    color?: string;
    disabled?: boolean;
    width?: string;
}

export function Btn1({funcion, titulo, bgcolor = "#ccc", icono, url, color = "0,0,0", disabled = false, width = "auto"
}:Btn1Props) {

  if(url) {
    return (
      <StyledLink
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        $bgcolor={bgcolor}
        $color={color}
        $width={width}
      >
        <section className="content" >
          {icono && <Icono $color={color}>{icono}</Icono>}
          {titulo && <span className="btn">{titulo}</span>}
        </section>
      </StyledLink>
    )
  }

  // Si no hay url => renderizar <button>
  return (
    <StyledButton
      onClick={funcion}
      disabled={disabled}
      $bgcolor={bgcolor}
      $color={color}
      $width={width}
      type="button"
    >
      <section className="content">
        {icono && <Icono $color={color}>{icono}</Icono>}
        {titulo && <span className="btn">{titulo}</span>}
      </section>
    </StyledButton>
  )
}

// estylos bases compartidos
const BaseStyles = `
  font-weight: 700;
  display: flex;
  font-size: 15px;
  padding: 10px 25px;
  border-radius: 16px;
  border: 2px solid rgba(50, 50, 50, 0.2);
  border-bottom: 5px solid rgba(50, 50, 50, 0.2);
  transform: translate(0, -3px);
  cursor: pointer;
  transition: 0.2s linear;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  .content {
    display: flex;
    gap: 12px;
  }

  &:active {
    transform: translate(0, 0);
    border-bottom: 2px solid rgba(50, 50, 50, 0.2);
  }

  &[disabled] {
    background-color: #646464;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

// styled para button
const StyledButton = styled.button<{
  $bgcolor: string;
  $color: string;
  $width: string;
}>`
  ${BaseStyles}
  background-color: ${(props) => props.$bgcolor};
  color: ${(props) => props.$color};
  width: ${(props) => props.$width};
`;

// styled para el link con el mismo aspecto
const StyledLink = styled.a<{
  $bgcolor: string;
  $color: string;
  $width: string;
}>`
  ${BaseStyles}
  background-color: ${(props) => props.$bgcolor};
  color: ${(props) => props.$color};
  width: ${(props) => props.$width};
`;