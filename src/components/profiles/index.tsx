import React, { useState } from "react";
import { IProps } from "../../interfaces/profiles/props.interface";

import { Profiles as ProfilesComponent } from "../../ui";

const profilesExample: Array<any> = [];

const Profiles: React.FC<any> = (): any => {
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

  const handleSetProfiles = (profile: any) =>
    setProfiles([...profiles, profile]);
  return (
    <ProfilesComponent
      title="hello"
      profiles={profiles}
      updateProfiles={handleSetProfiles}
    />
  );
};

export default Profiles;
