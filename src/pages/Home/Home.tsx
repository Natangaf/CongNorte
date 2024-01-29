import { PrincipalImage } from "../../assets/img";
import Header from "../../components/Header/Header";
import {
  Articles,
  DescriptionImg,
  DescriptionTitle,
  FigurePrincipal,
  ListArticles,
  MainDashboard,
  MoreArticles,
  Notification,
  PrincipalImg,
  SectionPricipal,
  SeeMore,
  SubTitle,
  Title,
} from "./_home";
import ContainerComponent from "./../../components/ContainerComponent/ContainerComponent";
import { a, b, c, d, e, f } from "../../assets/img/artigos";

const Home = () => {
  return (
    <MainDashboard data-com="MainDashboard">
      <Header />
      <ContainerComponent gap={0}>
        <Notification data-com="Notification">
          <b>Bem Vindo</b> | Site dos pioneiros da Congregação Norte - conheça
          os nossos pioneiros
        </Notification>
        <SectionPricipal data-com="SectionPricipal">
          <FigurePrincipal data-com="FigurePrincipal">
            <PrincipalImg data-com="PrincipalImg" src={PrincipalImage} alt="" />
          </FigurePrincipal>
          <DescriptionImg data-com="DescriptionImg">
            <SubTitle data-com="subTitle">CONECTE-SE AO PIONEIROS</SubTitle>
            <Title data-com="Title">
              Já pensou em conhecer melhor um pioneiro?
            </Title>
            <DescriptionTitle data-com="DescriptionTitle">
              Até onde você sabe?
            </DescriptionTitle>
            <SeeMore to="/pioneiros" data-com="SeeMore">
              Encontre um pioneiro
            </SeeMore>
          </DescriptionImg>
        </SectionPricipal>
        <MoreArticles data-com="MoreArticles">
          <ListArticles data-com="ListArticles">
            <Articles data-com="Articles">
              <img src={a} alt="" />
              <h3>Congregação norte nos correas</h3>
            </Articles>
            <Articles data-com="Articles">
              <img src={b} alt="" />
              <h3>Pioneiros na modalidade do carrinho</h3>
            </Articles>
            <Articles data-com="Articles">
              <img src={c} alt="" />
              <h3>Sem desanimar</h3>
            </Articles>
            <Articles data-com="Articles">
              <img src={d} alt="" />
              <h3>Sempre animados apesar de diversidades</h3>
            </Articles>
            <Articles data-com="Articles">
              <img src={e} alt="" />
              <h3>Companha do congresso</h3>
            </Articles>
            <Articles data-com="Articles">
              <img src={f} alt="" />
              <h3>Animados Apesar de dificuldades</h3>
            </Articles>
          </ListArticles>
        </MoreArticles>
      </ContainerComponent>
    </MainDashboard>
  );
};

export default Home;
