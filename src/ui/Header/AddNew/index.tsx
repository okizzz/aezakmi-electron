import React from "react";
import { NavLink } from "react-router-dom";

import plus from "../../../assets/icn_plus.svg";
import { Button, Dropdown } from "../../index";
import { AddNewComponent, ButtonsList } from "./styles";

// TODO:
// Вернуть DropdownMenu

const AddNew = () => {
  return (
    <AddNewComponent>
      <ButtonsList>
        <Button variant="outlined" text="Fingerprint" />
        <Button variant="outlined" text="Folder" />
        <Button variant="outlined" text="User" />
        <Button variant="outlined" text="Team" />

        <Dropdown
          options={[
            { title: "Single" },
            { title: "Mass" },
            { title: "Random" },
          ]}
        />
      </ButtonsList>
      <NavLink to="/login">
        <Button icon={plus} />
      </NavLink>
    </AddNewComponent>
  );
};

export default AddNew;
