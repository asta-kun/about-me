import { useContext } from "react";
import { PortfolioContext } from "./context";

const usePortfolio = (): PortfolioContext => useContext(PortfolioContext);

export default usePortfolio;
