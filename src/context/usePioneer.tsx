import { createContext, ReactNode, useContext, useState } from "react";
import { IPionner } from "../types/types";
import { pionner } from "../base/dataBase";
import { Navigate, useNavigate } from "react-router-dom";

interface ChildrenProps {
  children: ReactNode;
}

interface IusePioneerProvider {
  searchResults: IPionner[] | undefined;
  search: string | undefined;
  encontrarPioneirosPorNome(nome: string): void;
}

const PioneerContext = createContext({} as IusePioneerProvider);

const PioneerProvider = ({ children }: ChildrenProps) => {
  const [searchResults, setSearchResults] = useState<IPionner[] | undefined>();
  const [search, setSearch] = useState<string | undefined>();

  function encontrarPioneirosPorNome(nome: string) {
    const nomeMinusculo = nome.toLowerCase();
    const pioneirosEncontrados = pionner.filter((pioneiro) =>
      pioneiro.nome.toLowerCase().includes(nomeMinusculo)
    );

    setSearchResults(pioneirosEncontrados);
    setSearch(nome);
  }

  return (
    <PioneerContext.Provider
      value={{ searchResults, search, encontrarPioneirosPorNome }}
    >
      {children}
    </PioneerContext.Provider>
  );
};

export default PioneerProvider;

export const usePioneer = () => {
  const context = useContext(PioneerContext);

  if (!context) {
    throw new Error("usePioneer deve ser usado dentro de um PioneerProvider");
  }

  return context;
};
