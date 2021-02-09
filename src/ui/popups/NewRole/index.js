import "./NewRole.scss";

import cross from "../../assets/icn_cross.svg";

import Checkbox from "../../shared/Checkbox";
import Input from "../../shared/Input";
import InputDropdown from "../../shared/InputDropdown";
import Button from "../../shared/Button";

export default function NewRole() {
  return (
    <div className="popup-container">
      <div className="popup new-role">
        <div className="close">
          <img src={cross} alt="✕" />
        </div>
        <h2>New role</h2>
        <p className="text-3">Permissions</p>
        <Checkbox
          name="create-fingerprint-only"
          value="Create fingerprint only"
        />
        <Checkbox name="start-fingerprint" value="Start fingerprint" />
        <Checkbox name="cloud-profiles-only" value="Cloud profiles only" />
        <Checkbox name="transfer-to-all-users" value="Transfer to all users" />
        <Checkbox name="create-fingerprint" value="Create fingerprint" />
        <Checkbox name="edit-fingerprint" value="Edit fingerprint" />
        <Checkbox
          name="all-fingerprints-are-vision"
          value="All fingerprints are vision"
        />
        <hr />
        <Checkbox name="transfer-btw-folders" value="Transfer btw folders" />
        <Checkbox
          name="create-and-edit-folders"
          value="Create and edit folders"
        />
        <Checkbox name="invite-users" value="Invite users" />
        <InputDropdown title="Team" options={["Member 1", "Member 2"]} />
        <Input title="Role" />
        <Button class="main" text="Create" />
      </div>
    </div>
  );
}
