import "./MoveTo.scss";

import cross from "../../assets/icn_cross.svg";

import InputDropdown from "../../shared/InputDropdown";
import Button from "../../shared/Button";

export default function MoveTo() {
  return (
    <div className="popup-container">
      <div className="popup move-to">
        <div className="close">
          <img src={cross} alt="✕" />
        </div>
        <h2>Move to</h2>
        <InputDropdown title="Folder name" options={["Folder 1", "Folder 2"]} />
        <Button class="main" text="Move" />
      </div>
    </div>
  );
}
