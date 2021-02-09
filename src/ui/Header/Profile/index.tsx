import React from "react";

import arrowDown from "../../../assets/icn_arrow_down.svg";
import person from "../../../assets/dev_person.svg";

import { HeaderProfile, Avatar, Name } from "./styles";

interface IProps {
  avatar: string;
  name: string;
}

export default function Profile({ avatar, name }: IProps) {
  return (
    <HeaderProfile>
      <Avatar src={person} alt="Your Avatar" />
      <Name className="text-2 name">{name}</Name>
      <img src={arrowDown} alt="⌄" />
    </HeaderProfile>
  );
}
