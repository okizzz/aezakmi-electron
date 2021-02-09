import React from "react";

import cross from "../../../assets/icn_cross.svg";

import { Input, Button, CreateNotification } from "../../";
import person from "../../../assets/dev_person.svg";
// import InputDropdown from "../../shared/InputDropdown";

interface IProps {
  show: boolean;
  createFolder: (e: any) => void;
  handleSetShow: () => void;
}

// TODO: Add Dropdown
const CreateNewFolder: React.FC<IProps> = ({
  show,
  createFolder,
  handleSetShow,
}) => {
  if (!show) return null;

  const [value, updateInputValue] = React.useState<string>("");
  const handleUpdateInputValue = (e: any) => updateInputValue(e.target.value);

  const handleAddFolder = () => {
    const newObj = {
      title: value,
      fingerprints: "0",
      users: [{ name: "Ralph Edwards", avatar: person }],
    };
    createFolder(newObj);
    CreateNotification({
      description: "success",
      type: "success",
      message: "success",
    });
    handleSetShow();
  };
  return (
    <div className="popup-container">
      <div className="popup new-folder">
        <div className="close">
          <img src={cross} alt="✕" />
        </div>
        <h2>New Folder</h2>
        <Input
          name="Folder name"
          title="Folder Name"
          onChange={handleUpdateInputValue}
          value={value}
        />
        {/* <InputDropdown title="Select team or role" options={["Admin"]} /> */}
        <Button onClick={handleAddFolder} text="Create" />
      </div>
    </div>
  );
};

export default CreateNewFolder;
