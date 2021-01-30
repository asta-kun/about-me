import React, { ReactElement } from "react";
import "normalize.css";
import "./app.css";
import ModuleRouter from "./modules/_router";
import { PortfolioContextProvider } from "./management/portfolio";
import { ToastProvider } from "react-toast-notifications";
import { BrowserRouter as Router } from "react-router-dom";

const App = (): ReactElement => {
  return (
    <Router>
      <ToastProvider autoDismiss={true} autoDismissTimeout={3000}>
        <PortfolioContextProvider>
          <ModuleRouter />
        </PortfolioContextProvider>
      </ToastProvider>
    </Router>
  );
};

export default App;
