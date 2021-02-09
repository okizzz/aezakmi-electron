import "./Filter.scss";

import cross from "../../assets/icn_cross.svg";

import Input from "../../shared/Input";
import Button from "../../shared/Button";

export default function Filter() {
  return (
    <div className="popup-container">
      <div className="popup filter">
        <div className="close">
          <img src={cross} alt="✕" />
        </div>
        <h2>Filter</h2>
        <Input title="Folder name" />
        <div className="fingerprints-date">
          <Input title="Fingerprints" />
          <Input title="Date created" />
        </div>
        <Button class="main" text="Save" />
      </div>
    </div>
  );
}
