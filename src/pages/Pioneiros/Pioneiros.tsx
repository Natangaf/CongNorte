import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { usePioneer } from "../../context/usePioneer";
import { IPionner } from "../../types/types";
import { pionner } from "../../base/dataBase";
import { MainDashboard, Pioneer, PioneersList, Title } from "./_pioneiros";
import ContainerComponent from "../../components/ContainerComponent/ContainerComponent";
import { useNavigate } from "react-router-dom";

const Pioneiros = () => {
  const navigate = useNavigate();

  const { searchResults, search } = usePioneer();

  const [data, setData] = useState<IPionner[]>([]);

  useEffect(() => {
    if (searchResults) {
      setData(searchResults);
    } else {
      setData(pionner);
    }
  }, [searchResults, data]);

  return (
    <MainDashboard data-com="MainDashboard">
      <Header />
      <ContainerComponent alignitems="flex-start">
        {searchResults ? (
          <Title data-com="Title">Resultados da pesquisa : {search}</Title>
        ) : (
          <Title data-com="Title">Nossos Pioneiros </Title>
        )}
        <PioneersList data-com="PioneersList">
          {data?.map(({ id, capa, nome }) => (
            <Pioneer
              data-com="Pioneer"
              key={id}
              onClick={() => {
                navigate(`/Pioneiro/${id}`);
              }}
            >
              <img src={capa} alt={`profile-${nome}`} />
              <h3>Experiência de {nome}</h3>
            </Pioneer>
          ))}
        </PioneersList>
      </ContainerComponent>
    </MainDashboard>
  );
};

export default Pioneiros;
