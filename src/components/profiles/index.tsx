import React, { useState } from "react";
import { IProfile } from "../../interfaces/profiles/profile.interface";
import { IProps } from "../../interfaces/profiles/props.interface";

import { Profiles as ProfilesComponent } from "../../ui";

const Profiles = (): any => {
  //Начальные значения, те заглушка..
  //--------------------------------
  const [profiles, setProfiles] = useState([
    {
      title: "Fingerprint 4",
      note: "Send invite to Ivan Jack",
      state: "selected",
    },
    {
      title: "Fingerprint 7",
      note: "Send invite to Ivan Jack",
      state: "selected",
    },
  ]);
  //--------------------------------
  const handleSetProfiles = (profile: IProfile): void => {
    setProfiles([...profiles, profile]);
  };
  return (
    <ProfilesComponent
      title="hello"
      profiles={profiles}
      updateProfiles={handleSetProfiles}
    />
  );
};

export default Profiles;
