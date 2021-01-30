import React, { ReactElement, ReactNode } from "react";

import { PortfolioContext } from "./context";

type PortfolioContextProps = {
  children: ReactNode;
};

const PortfolioContextProvider = ({
  children,
}: PortfolioContextProps): ReactElement => {
  return (
    <PortfolioContext.Provider value={{}}>{children}</PortfolioContext.Provider>
  );
};

export default PortfolioContextProvider;
