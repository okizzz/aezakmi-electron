import React from "react";

import logo from "../../assets/logo.svg";
import solo from "../../assets/icn_solo.svg";
import team from "../../assets/icn_team.svg";

import SectionSelect from "./SectionSelect";
import Footer from "./Footer";

import {
  SidebarCompoonent,
  LogoContainer,
  Logo,
  SidebarContent,
} from "./styles";

const Sidebar = () => {
  return (
    <SidebarCompoonent>
      <LogoContainer>
        <Logo src={logo} alt="Aezakmi+" />
      </LogoContainer>
      <SidebarContent>
        <SectionSelect
          options={[
            { title: "Solo", icon: solo },
            { title: "Team", icon: team },
          ]}
        />
        <Footer />
      </SidebarContent>
    </SidebarCompoonent>
  );
};

export default Sidebar;
