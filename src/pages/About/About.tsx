import Header from "../../components/Header/Header";
import ContainerComponent from "../../components/ContainerComponent/ContainerComponent";
import {
  AddInfomation,
  Biography,
  DescripitionBiography,
  ImgAddInfomation,
  ImgBiography,
  MainPioneer,
  Title,
  DidYouKnowHeader,
  DidYouKnowTitle,
  DidYouKnowMain,
  DidYouKnow,
  MainBiography,
  AddInfomationFigure,
  AddInfomationDowl,
  SubTitle,
  TitleAddInfomation,
  ButtonIcon,
  ContainerButtons,
  ContainerText,
  TitleWachtower,
} from "./_about";
import { about, aboutWatch, sentinela } from "../../assets/img";
import { external, document } from "../../assets/icons";

const About = () => {
  const handlePrint = () => {
    window.print();
  };

  const copyLinkToClipboard = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL);
    alert("Link copiado para a área de transferência!");
  };
  const calculateYearsFrom = (start: string) => {
    const startDate = new Date(start);
    const currentDate = new Date();
    const years = currentDate.getFullYear() - startDate.getFullYear();

    return years;
  };

  return (
    <MainPioneer data-com="MainPioneer">
      <Header />
      <ContainerComponent>
        <Biography data-com="Biography">
          <ImgBiography data-com="ImgBiography" src={about} alt="about" />
          <DescripitionBiography data-com="DescripitionBiography">
            <Title data-com="Title">
              Pioneiros da Congregacão Norte - Carta
            </Title>
            <MainBiography data-com="MainBiography">
              <p>
                A Congregação Norte tem a honra e alegria de expressar sua mais
                profunda gratidão aos dedicados pioneiros que têm sido pilares
                fundamentais em nossa comunidade de adoração a Jeová. Cada um
                desses indivíduos exemplares tem desempenhado um papel
                essencial, contribuindo para o crescimento espiritual e o
                bem-estar da congregação.
              </p>
              <p>
                <b>
                  {" "}
                  Alessandra, Amarildo, Andre, Basilia, Capel, Claudia,
                  Edileide, Emily, Flavia, Hugo, Isabel, Jeane, Kellen,
                  KellyCristina, MariaImaculada, Michelle, Mirelly,
                  NadiaCordeiro, Nara, Natalia, Natalina, Sabrina, Samira,
                  Severino, Simone, Socorro, Stefany, Vania, e Vitoria,
                </b>{" "}
                cada um de vocês representa um exemplo notável de devoção,
                esforço incansável e amor verdadeiro pela adoração a Jeová.
              </p>
              <p>
                O trabalho incrível que vocês realizam como pioneiros não passa
                despercebido. Estar na vanguarda da congregação, compartilhando
                as boas novas e demonstrando amor incondicional, é um testemunho
                inspirador para todos nós. A congregação reconhece e agradece
                sinceramente por suas contribuições valiosas, que têm impactado
                positivamente a vida espiritual de muitos.
              </p>
              <p>
                Que a bênção de Jeová continue a guiá-los em seu serviço
                dedicado, e que o amor e a gratidão da congregação estejam
                sempre presentes, fortalecendo essa bela irmandade. Que cada um
                de vocês continue a ser um exemplo brilhante de fé e dedicação
                no serviço a Deus e ao próximo.
              </p>
              <p>
                Expressamos nossa mais profunda gratidão e pedimos as bênçãos de
                Jeová sobre vocês enquanto continuam a fazer a diferença na vida
                da congregação e na divulgação do Reino. Muito obrigado por seu
                trabalho incomparável e por serem verdadeiramente agentes de
                transformação em nossa congregação. Que Jeová abençoe ricamente
                cada um de vocês.
              </p>
            </MainBiography>
          </DescripitionBiography>
          <DidYouKnow data-com="DidYouKnow">
            <DidYouKnowHeader data-com="DidYouKnowHeader">
              <DidYouKnowTitle data-com="DidYouKnowTitle">
                Você sabia?
              </DidYouKnowTitle>
            </DidYouKnowHeader>
            <DidYouKnowMain data-com="DidYouKnowMain">
              <li>
                Sabia que na congregação norte, atualmente, há um total de{" "}
                <span>29 Pioneiros Regulares</span> dedicados ao serviço?
              </li>
              <li>
                Entre esses pioneiros, destaca-se <b>Isabel</b>, cujo batismo
                remonta a <span>1978</span>, acumulando{" "}
                <span>{calculateYearsFrom(`1978`)}</span> anos de dedicação.
              </li>
              <li>
                <b>Isabel</b>, a pioneira com mais tempo de serviço, foi
                batizada em <span>1978</span> e iniciou sua jornada pioneira no
                mesmo ano. Ela oferece seu serviço dedicado há{" "}
                <span>{calculateYearsFrom(`1978`)}</span> anos.
              </li>
              <li>
                A mais jovem entre os pioneiros é <b>Vitória</b>, que foi
                batizada em <span>2023</span> e iniciou seu serviço pioneiro no
                ano seguinte, em 2024. Atualmente, ela completa{" "}
                <span>{calculateYearsFrom(`2024`)}</span> anos nesse serviço
                especializado.
              </li>
            </DidYouKnowMain>
          </DidYouKnow>
        </Biography>
        <AddInfomation data-com="AddInfomation">
          <AddInfomationFigure data-com="AddInfomationFigure">
            <ImgAddInfomation
              data-com="ImgAddInfomation"
              src={sentinela}
              alt="sentinela"
            />
            <ContainerText data-com="ContainerText">
              <ImgAddInfomation
                data-com="ImgAddInfomation"
                src={aboutWatch}
                alt="bou"
              />
              <TitleWachtower data-com="TitleWachtower">
                Pioneiros da Congregacão Norte
              </TitleWachtower>
            </ContainerText>
          </AddInfomationFigure>
          <AddInfomationDowl data-com="AddInfomationDowl">
            <TitleAddInfomation data-com="TitleAddInfomation">
              OPÇÕES DE DOWNLOAD
            </TitleAddInfomation>
            <ContainerButtons data-com="ContainerButtons">
              <ButtonIcon data-com="ButtonIcon" onClick={handlePrint}>
                <img src={document} alt="" />
              </ButtonIcon>
              <ButtonIcon data-com="ButtonIcon" onClick={copyLinkToClipboard}>
                <img src={external} alt="" />
              </ButtonIcon>
            </ContainerButtons>
          </AddInfomationDowl>
        </AddInfomation>
      </ContainerComponent>
    </MainPioneer>
  );
};

export default About;
