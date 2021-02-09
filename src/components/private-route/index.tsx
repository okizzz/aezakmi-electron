import React from "react";
import { Route, RouteProps } from "react-router-dom";

declare interface IPrivateRoute extends RouteProps {
  component: React.ComponentType;
}

// TODO: Добавить логику валидации для компоненты
const PrivateRoute: React.FC<IPrivateRoute> = (props) => {
  return <Route {...props} />;
};

export default PrivateRoute;
