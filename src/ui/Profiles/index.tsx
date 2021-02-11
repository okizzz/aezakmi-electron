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
import Popup from "../popups/index";

import { Checkbox, Button, CreateNotification } from "../";
import Profile from "./Profile";

import { IProps } from "../../interfaces/profiles/props.interface";
import { IProfile } from "../../interfaces/profiles/profile.interface";

const Profiles: React.FC<any> = ({
  updateProfiles,
  profiles,
  title,
}: IProps) => {
  const [show, setIsShow] = React.useState<boolean>(false);
  const handleSetShow = () => setIsShow(!show);
  const handleUpdateProfiles = (): void => {
    const profile = { title: "title", note: "note", state: "state" };
    updateProfiles(profile);
    handleSetShow();
    CreateNotification({
      message: "created",
      description: "huy",
      type: "warning",
    });
  };
  return (
    <ProfielsComponents>
      <TitleContainer>
        <CheckBoxContainer>
          <Checkbox />
        </CheckBoxContainer>
        <Title>
          <h2>{title}</h2>
          <Note>Note</Note>
          <Note>Proxy</Note>
          <ButtonsList>
            <Button icon={search} />
            <Button icon={options} />
            <Button icon={trash} />
          </ButtonsList>
        </Title>
      </TitleContainer>
      {profiles.map((profile: IProfile) => {
        return <Profile profile={profile} />;
      })}
      <Popup
        handleClose={handleSetShow}
        handleButtonCLick={handleUpdateProfiles}
        title="Create Profile"
        isShow={show}
      >
        <div>123</div>
      </Popup>
      <AddContainer>
        <Button onClick={handleSetShow} icon={plus} />
      </AddContainer>
    </ProfielsComponents>
  );
};

export default Profiles;
