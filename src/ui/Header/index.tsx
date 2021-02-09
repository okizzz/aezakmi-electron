/* eslint-disable no-debugger */
import React, { FC } from "react";
import { useRouter } from "../../hooks";
// import withLocationHOC from "../../hoc/withLocation";

import arrowLeft from "../../assets/icn_arrow_left.svg";

import AddNew from "./AddNew";
import Profile from "./Profile";
import { HeaderComponent, Title, ProfileContainer } from "./styles";

interface IProps {
  title: string;
}

const Header: FC<IProps> = ({ title }: IProps) => {
  const [showPopup, setIsShowPopup] = React.useState<boolean>(false);
  const { location } = useRouter();
  if (
    location.pathname.includes("login") ||
    location.pathname.includes("signup")
  ) {
    return null;
  }
  return (
    <HeaderComponent>
      <Title>
        {/* PROPS BACK */}
        <img src={arrowLeft} alt="‹" />
        <h3>{title}</h3>
      </Title>
      <ProfileContainer>
        <AddNew />
        <Profile avatar="https://person.svg" name="Alex Carl" />
      </ProfileContainer>
    </HeaderComponent>
  );
};

export default Header;
