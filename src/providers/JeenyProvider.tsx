import React, { useEffect, createContext } from "react";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "../config/apollo/apolloClient";

type JeenyContextType = {};
const defaultValue: JeenyContextType = {};

export const JeenyContext = createContext<JeenyContextType>(defaultValue);

interface JeenyContextProviderProps {
  apiKey: string;
  apiUrl?: string;
  children: React.ReactNode;
}

export const JeenyProvider: React.FC<JeenyContextProviderProps> = ({
  apiKey,
  children,
  apiUrl,
}) => {
  const apolloClient = createApolloClient({
    apiKey,
    apiUrl,
  });

  return (
    <JeenyContext.Provider value={{}}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </JeenyContext.Provider>
  );
};
