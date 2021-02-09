import React from "react";
import { NavLink } from "react-router-dom";

import play from "../../assets/icn_play.svg";
import timer from "../../assets/icn_timer.svg";
import copy from "../../assets/icn_copy.svg";

import Button from "../Button";
import { NavigationComponent, Nav, Page } from "./styles";

interface IProps {
  pages: any[];
}

const Navigation: React.FC<IProps> = (props: IProps) => {
  return (
    <NavigationComponent>
      <Nav>
        {props.pages.map((page) => {
          return (
            <NavLink to={page.link} key={page.title}>
              <Page currentLink={window.location.hash} link={page.link}>
                <h1>{page.title}</h1>
              </Page>
            </NavLink>
          );
        })}
      </Nav>
      {/* <div className={["buttons mass-start"].join(" ")}>
        <Button text="Massstart" icon={play} />
        <Button  icon={timer} />
      </div>
      <div className={["buttons create"].join(" ")}>
        <Button text="Create" />
      </div>
      <div className={["buttons check-proxy"].join(" ")}>
        <Button text="Check proxy" />
      </div>
      <div className={["buttons copy-token"].join(" ")}>
        <Button text="Copy Tocken API" icon={copy} />
      </div> */}
    </NavigationComponent>
  );
};

export default Navigation;
