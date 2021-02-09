import "./NewTeam.scss";

import cross from "../../assets/icn_cross.svg";

import Input from "../../shared/Input";
import Button from "../../shared/Button";

export default function NewTeam() {
  return (
    <div className="popup-container">
      <div className="popup new-team">
        <div className="close">
          <img src={cross} alt="✕" />
        </div>
        <h2>New team</h2>
        <Input title="Team name" />
        <Button class="main" text="Create" />
      </div>
    </div>
  );
}
