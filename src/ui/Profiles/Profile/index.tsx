import React from "react";

import {
  ProfileComponent,
  CheckboxContainer,
  ProfileContent,
  Title,
  ButtonsList,
  ProfileTitle,
  Proxy,
  ProxyStatus,
  StatusIcon,
  Controls,
  Note,
} from "./styles";

import play from "../../../assets/icn_play.svg";
import timer from "../../../assets/icn_timer.svg";
// import GB from "../../../assets/flag_GB.png";
import star from "../../../assets/icn_star.svg";
import info from "../../../assets/icn_info.svg";
import palette from "../../../assets/icn_palette.svg";
import gear from "../../../assets/icn_gear.svg";
import earth from "../../../assets/icn_earth.svg";
import puzzle from "../../../assets/icn_puzzle.svg";
import move from "../../../assets/icn_move.svg";

import Checkbox from "../../Checkbox";
import Button from "../../Button";

const Profile = (props: any) => {
  return (
    <ProfileComponent>
      <CheckboxContainer>
        <Checkbox />
      </CheckboxContainer>
      <ProfileContent>
        <Title>
          <ButtonsList>
            <Button text="Start" icon={play} />
            <Button variant="outlined" icon={timer} />
          </ButtonsList>
          <ProfileTitle>{props.profile.title}</ProfileTitle>
        </Title>
        <Note>{props.profile.note}</Note>
        <Proxy>
          <Button text="Check" />
          <ProxyStatus>
            <img src={""} alt="123" />
            <StatusIcon />
          </ProxyStatus>
        </Proxy>
        <Controls>
          <Button variant="outlined" icon={star} />
          <Button variant="outlined" icon={info} />
          <Button variant="outlined" icon={palette} />
          <Button variant="outlined" icon={gear} />
          <Button variant="outlined" icon={earth} />
          <Button variant="outlined" icon={puzzle} />
          <Button variant="outlined" icon={move} />
        </Controls>
      </ProfileContent>
    </ProfileComponent>
  );
};

export default Profile;
