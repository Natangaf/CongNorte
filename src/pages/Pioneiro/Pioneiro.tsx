import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
} from "./_pioneiro";
import { pionner } from "../../base/dataBase";
import { IPionner } from "../../types/types";
import { sentinela } from "../../assets/img";
import { external, document } from "../../assets/icons";

const Pioneiro = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState<IPionner | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) {
          navigate("/Pioneiros");
          return;
        }

        const foundData = pionner.find((pioneiro) => `${pioneiro.id}` === id);

        if (!foundData) {
          navigate("/Pioneiros");
          return;
        }

        setData(foundData);
      } catch (error) {
        console.error("Error fetching data:", error);
        navigate("/Pioneiros");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, navigate]);

  const calculateYearsFrom = (start: string) => {
    const startDate = new Date(start);
    const currentDate = new Date();
    const years = currentDate.getFullYear() - startDate.getFullYear();

    return years;
  };

  const handlePrint = () => {
    window.print();
  };

  const copyLinkToClipboard = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL);
    alert("Link copiado para a área de transferência!");
  };

  return (
    <MainPioneer data-com="MainPioneer">
      <Header />
      <ContainerComponent>
        {loading && <p>Loading...</p>}
        {data && (
          <>
            <Biography data-com="Biography">
              <ImgBiography
                data-com="ImgBiography"
                src={data.capa}
                alt={data.nome}
              />
              <DescripitionBiography data-com="DescripitionBiography">
                <Title data-com="Title">
                  {data.title} - Experiencia de {data.nome}
                </Title>
                <MainBiography data-com="MainBiography">
                  {data.biografia.split(".").map((sentence, index, array) => (
                    <p key={index}>
                      {sentence.trim()}
                      {index !== array.length - 1 && "."}
                    </p>
                  ))}
                </MainBiography>
              </DescripitionBiography>
              <DidYouKnow data-com="DidYouKnow">
                <DidYouKnowHeader data-com="DidYouKnowHeader">
                  <DidYouKnowTitle data-com="DidYouKnowTitle">
                    Você sabia?
                  </DidYouKnowTitle>
                </DidYouKnowHeader>
                <DidYouKnowMain data-com="DidYouKnowMain">
                  <p>
                    <b> {data.nome}</b> se batizou em
                    <span> {data.batismo}</span> e ingressou no serviço de
                    pioneiro em <span>{data.pioneiro}</span>.
                  </p>
                  <p>
                    Atualmente, ela está no serviço de pioneiro há
                    <span> {calculateYearsFrom(data.pioneiro)} anos</span>.
                  </p>
                </DidYouKnowMain>
              </DidYouKnow>
            </Biography>
            <AddInfomation data-com="AddInfomation">
              <AddInfomationFigure data-com='AddInfomationFigure'>
                <ImgAddInfomation
                  data-com="ImgAddInfomation"
                  src={sentinela}
                  alt="sentinela"
                />
                <ContainerText data-com="ContainerText">
                  <ImgAddInfomation
                    data-com="ImgAddInfomation"
                    src={data.img}
                    alt={data.nome}
                  />
                  <TitleWachtower data-com="TitleWachtower">
                    {data.title}
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
                  <ButtonIcon
                    data-com="ButtonIcon"
                    onClick={copyLinkToClipboard}
                  >
                    <img src={external} alt="" />
                  </ButtonIcon>
                </ContainerButtons>
              </AddInfomationDowl>
            </AddInfomation>
          </>
        )}
      </ContainerComponent>
    </MainPioneer>
  );
};

export default Pioneiro;
