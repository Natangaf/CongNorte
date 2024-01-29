import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { about, inicio, pesquisar, pioneiros } from "../../assets/icons";
import { logo } from "../../assets/img";
import theme from "../../styles/theme";
import {
  ContainerInput,
  ContainerLogo,
  ContainerNav,
  HeaderData,
  InputShared,
  LinkTo,
  Logo,
  Navigate,
  NavigateData,
  NavigateLinks,
} from "./_header";
import { usePioneer } from "../../context/usePioneer";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const route = useLocation();

  const { encontrarPioneirosPorNome } = usePioneer();

  const handleSearch = () => {
    encontrarPioneirosPorNome(searchTerm);

    if (route.pathname !== "/pioneiros") {
      navigate("/pioneiros");
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <ContainerNav data-com="ContainerNav">
      <HeaderData data-com="HeaderData">
        <NavigateData data-com="NavigateData">
          <ContainerLogo data-com="ContainerLogo">
            <Logo data-com="Logo" src={logo} alt="Logo" />
            <h1> Congregação Norte</h1>
          </ContainerLogo>
          <ContainerInput data-com="ContainerInput">
            <InputShared
              type="text"
              placeholder="Pesquisar Pioneiro"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <img src={pesquisar} alt="" onClick={handleSearch} />
          </ContainerInput>
        </NavigateData>
      </HeaderData>
      <Navigate data-com="Navigate">
        <NavigateLinks data-com="NavigateLinks">
          <LinkTo data-com="LinkTo" to="/">
            <img src={inicio} alt="" />
            INÍCIO
          </LinkTo>
          <LinkTo data-com="LinkTo" to="/pioneiros">
            <img src={pioneiros} alt="" />
            PIONEIROS
          </LinkTo>
          <LinkTo data-com="LinkTo" to="/about">
            <img src={about} alt="" />
            ABOUT
          </LinkTo>
        </NavigateLinks>
      </Navigate>
    </ContainerNav>
  );
};

export default Header;
