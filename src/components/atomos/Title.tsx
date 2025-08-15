import styled from "styled-components";

interface TitleProps {
  $paddingBottom?: string;
  $color?: string;
  $fontSize?: string;
}

export const Title = styled.span<TitleProps>`
  font-weight: 700;
  font-size: ${(props) => props.$fontSize || '30px'};
  color: ${(props) => props.$color || 'inherit'};
  padding-bottom: ${(props) => props.$paddingBottom || '0'};
`;