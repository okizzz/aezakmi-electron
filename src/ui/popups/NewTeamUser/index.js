import "./NewTeamUser.scss";

import cross from "../../assets/icn_cross.svg";

import Input from "../../shared/Input";
import InputDropdown from "../../shared/InputDropdown";
import Button from "../../shared/Button";

export default function NewTeamUser() {
  return (
    <div className="popup-container">
      <div className="popup new-team-user">
        <div className="close">
          <img src={cross} alt="✕" />
        </div>
        <h2>New team user</h2>
        <Input title="Email" type="email" />
        <Input title="Temporary password" type="password" />
        <InputDropdown title="Role" options={["Teammate"]} />
        <Button class="main" text="Create" />
      </div>
    </div>
  );
}
