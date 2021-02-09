import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/private-route";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyle, ThemeType } from "./theme";
import "antd/dist/antd.css";
import "./index.css";
import SoloDashboard from "./components/solo-dashboard";
import Login from "./components/login";
import { Header, Sidebar } from "./ui";

// FIXME: Разобраться как лучше совать Header и Sidebar для всех компонент
// import { Header, Sidebar } from "./ui";

const App: React.FC = () => {
  // TODO: Добавить типизацию
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const CURRENT_THEME = localStorage.getItem("theme");
    if (!CURRENT_THEME) return setTheme("dark");
    setTheme(CURRENT_THEME);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div style={{ marginLeft: 200, marginTop: 60, paddingRight: 30 }}>
        <Switch>
          <PrivateRoute path="/solo/dashboard" component={SoloDashboard} />
          <PrivateRoute
            path="/team/dashboard"
            component={() => (
              <>
                <Header title="Team Dasboard" />
                <Sidebar />
                <div>123</div>
              </>
            )}
          />
          <Route exact path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
