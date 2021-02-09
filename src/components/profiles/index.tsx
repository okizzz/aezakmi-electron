import React from "react";
import { Profiles as ProfilesComponent } from "../../ui";

const Profiles = () => {
  return (
    <ProfilesComponent
      profiles={[
        {
          title: "Fingerprint 4",
          note: "Send invite to Ivan Jack",
          state: "selected",
        },
        {
          title: "Fingerprint 5",
          note: "Please share last 100 fingerprints to Max|",
          state: "selected",
        },
        {
          title: "Fingerprint 3",
          note: "The fingerprint is for Facebook",
        },
      ]}
    />
  );
};

export default Profiles;
