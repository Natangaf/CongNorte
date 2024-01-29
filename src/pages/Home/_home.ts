import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "../../styles/media";

export const MainDashboard = styled.main`
  width: 100%;
`;
export const Notification = styled.h2`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.details.primary};

  padding: 10px;

  text-align: start;

  font-size: 1rem;

  b {
    font-weight: 700;
  }
`;
export const SectionPricipal = styled.section`
  width: 100%;

  position: relative;

  ${media.mobile} {
    margin-bottom: 250px;
  }
`;

export const FigurePrincipal = styled.figure`
  width: 100%;
  max-height: 450px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, rgba(10, 34, 75), rgba(0, 0, 0, 0));
  }
`;

export const PrincipalImg = styled.img`
  width: 100%;
  max-height: 450px;

  object-fit: cover;
  object-position: center;
`;

export const DescriptionImg = styled.article`
  max-width: 34%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-25%, -50%);
  ${media.mobile} {
    max-width: 90%;

    padding: 20px 30px;

    background-color: ${({ theme }) => theme.colors.background.secondary};
    transform: translate(-5%, 15%);
  }
`;

export const SubTitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
`;

export const DescriptionTitle = styled.h4`
  font-size: 1.205rem;
  font-weight: 500;
`;

export const SeeMore = styled(Link)`
  font-size: 1.205rem;
  font-weight: 500;

  padding: 5px 10px;

  background-color: ${({ theme }) => theme.colors.primary.main};

  transition: all 0.5ms ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.secondary};
  }
`;

export const MoreArticles = styled.section`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  margin-top: 10px;
`;
export const ListArticles = styled.ul`
  width: 90%;

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

export const TitleArticles = styled.h3`
  font-size: 2rem;
  font-weight: 500;
`;
export const Articles = styled.li`
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
