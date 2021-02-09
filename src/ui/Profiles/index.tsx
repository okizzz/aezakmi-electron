import React from "react";
import {
  ProfielsComponents,
  TitleContainer,
  Title,
  ButtonsList,
  CheckBoxContainer,
  Note,
  AddContainer,
} from "./styles";

import search from "../../assets/icn_search.svg";
import options from "../../assets/icn_options.svg";
import trash from "../../assets/icn_trash.svg";
import plus from "../../assets/icn_plus.svg";

import { Checkbox, Button } from "../";
import Profile from "./Profile";

interface IProps {
  profiles: any[];
}

const Profiles = (props: IProps) => {
  return (
    <ProfielsComponents>
      <TitleContainer>
        <CheckBoxContainer>
          <Checkbox />
        </CheckBoxContainer>
        <Title>
          <h2>Fingerprints</h2>
          <Note>Note</Note>
          <Note>Proxy</Note>
          <ButtonsList>
            <Button icon={search} />
            <Button icon={options} />
            <Button icon={trash} />
          </ButtonsList>
        </Title>
      </TitleContainer>
      {props.profiles.map((profile: any) => {
        return <Profile profile={profile} />;
      })}
      <AddContainer>
        <Button variant="outlined" icon={plus} />
      </AddContainer>
    </ProfielsComponents>
  );
};

export default Profiles;
