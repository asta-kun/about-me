import React, { lazy, ReactElement, Suspense } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import BasePage from "../containers/basePage";

const Portfolio = lazy(() => import("./portfolio"));

const ModuleRouter = (): ReactElement => {
  return (
    <BasePage>
      <Suspense fallback={<>Loading...</>}>
        <Switch>
          <Route path="/" exact strict>
            <Portfolio />
          </Route>
        </Switch>
      </Suspense>
    </BasePage>
  );
};

export default ModuleRouter;
