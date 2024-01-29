import styled from "styled-components";
import media from "../../styles/media";

export const MainDashboard = styled.main`
  width: 100%;

  div[data-com="Container"] {
    padding: 30px 40px;
  }
`;
export const PioneersList = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 5%;

  margin-top: 10px;

  ${media.tablet} {
    justify-content: center
  }
`;
export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 500;
`;
export const Pioneer = styled.li`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  cursor: pointer;

  width: 30%;

  display: flex;
  flex-direction: column;

  margin-bottom: 30px;

  img {
    width: 100%;
    max-height: 200px;

    object-fit: cover;
    object-position: top;
  }
  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.thirty};
    padding: 5px;
  }

  ${media.tablet} {
    width: 40%;
  }
  ${media.mobile} {
    width: 90%;
  }
`;
