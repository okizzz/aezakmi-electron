import "./EditFolder.scss";

import cross from "../../assets/icn_cross.svg";

import Input from "../../shared/Input";
import InputDropdown from "../../shared/InputDropdown";
import Button from "../../shared/Button";

export default function EditFolder() {
  return (
    <div className="popup-container">
      <div className="popup edit-folder">
        <div className="close">
          <img src={cross} alt="✕" />
        </div>
        <h2>Edit Folder</h2>
        <Input title="Folder Name" />
        <InputDropdown title="Edit team" options={["Team 1"]} />
        <Button class="main" text="Save" />
      </div>
    </div>
  );
}
