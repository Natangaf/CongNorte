import styled from "styled-components";
import media from "../../styles/media";

interface ContainerProps {
  gap: number;
  alignitems: string;
}

export const Container = styled.div<ContainerProps>`
  width: 90%;
  max-width: 1300px;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: ${({ alignitems }) => alignitems};
  gap: ${({ gap }) => `${gap}px`};
  position: relative;

  background-color: ${({ theme }) => theme.colors.background.main};

  ${media.tablet} {
    width: 100%;
  }

`;
