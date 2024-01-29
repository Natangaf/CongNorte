import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "./../../styles/media";

export const ContainerNav = styled.header`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const HeaderData = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.background.main};
`;
export const Navigate = styled.nav`
  width: 100%;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.background.secondary};
`;
export const NavigateData = styled.div`
  max-width: 1300px;

  padding: 10px 20px;

  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: relative;

  ${media.tablet} {
    flex-direction: column;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  margin-left: 100px;
  ${media.tablet}{
    height: 90px;
  }
`;

export const Logo = styled.img`
  height: 80px;
  width: 80px;

  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0px;
`;

export const ContainerInput = styled.label`
  width: 25%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${({ theme }) => theme.colors.background.secondary};
  border-radius: 5px;

  padding: 5px 10px;

  ${media.tablet} {
    width: 100%;
  }
`;

export const InputShared = styled.input`
  width: 100%;

  border: none;
  outline: none;

  background-color: transparent;
`;

export const NavigateLinks = styled.div`
  max-width: 1000px;

  padding: 10px 20px;

  margin: 0px auto;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 50px;
  ${media.laptop} {
    padding-left: 100px;
  }
  ${media.tablet} {
    max-width: 100%;

    padding-left: 20px;

    justify-content: center;
    margin: 0 auto;
    gap: 20px;
  }
`;

export const LinkTo = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  font-weight: 500;
  ${media.tablet} {
    font-size: 0.8rem;
  }
`;
