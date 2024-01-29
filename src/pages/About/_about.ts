import styled from "styled-components";
import media from "../../styles/media";
import { BrowserRouter } from "react-router-dom";

export const MainPioneer = styled.main`
  width: 100%;

  div[data-com="Container"] {
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    padding: 80px 0px;

    ${media.tablet} {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const Biography = styled.section`
  width: 60%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  ${media.tablet} {
    width: 100%;
  }
`;
export const ImgBiography = styled.img`
  width: 100%;
  height: 300px;

  object-fit: cover;
  object-position: center;
`;
export const DescripitionBiography = styled.article`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
`;
export const SubTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.text.secondary};
`;
export const MainBiography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  b {
    font-weight: 600;
    text-decoration: underline;
  }
`;

export const DidYouKnow = styled.article`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.background.secondary};

  b {
    font-weight: 600;
    text-decoration: underline;
  }
  span {
    color: ${({ theme }) => theme.colors.text.thirty};
  }
`;
export const DidYouKnowHeader = styled.div`
  width: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  border-bottom: 1px solid #a7a7a7;
`;

export const DidYouKnowTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const DidYouKnowMain = styled.ul`
  width: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  li {
    width: 90%;
  }
`;
export const AddInfomation = styled.section`
  width: 30%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;

  ${media.tablet} {
    width: 80%;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.background.thirty};
  }
`;
export const AddInfomationFigure = styled.figure`
  width: 100%;
  height: 303px;

  background-color: ${({ theme }) => theme.colors.details.primary};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${media.tablet} {
    width: 50%;
    background-color: transparent;
  }
`;
export const TitleWachtower = styled.p`
  width: 50px;
  font-size: 0.3rem;
  position: absolute;
  bottom: 10px;
  left: 5px;
`;
export const ContainerText = styled.div`
  width: 30%;
  position: relative;

  ${media.tablet} {
    width: 50%;
  }
  img[data-com="ImgAddInfomation"] {
    width: 100%;
  }
`;
export const ImgAddInfomation = styled.img`
  width: 30%;
  ${media.tablet} {
    width: 50%;
  }
`;

export const AddInfomationDowl = styled.article`
  padding: 20px 30px;

  background-color: ${({ theme }) => theme.colors.background.thirty};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${media.mobile} {
    width: 30%;
  }
`;

export const TitleAddInfomation = styled.h3`
  font-size: 1rem;
  font-weight: 400;
`;
export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  ${media.mobile} {
    gap: 5px;
  }
`;
export const ButtonIcon = styled.button`
  padding: 3px;

  background-color: transparent;
  outline: none;

  border: 1px solid #363636;

  img {
    width: 24px;
    height: 24px;
  }
`;
