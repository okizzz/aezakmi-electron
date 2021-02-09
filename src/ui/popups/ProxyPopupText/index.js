import "./ProxyPopupText.scss";

import cross from "../../assets/icn_cross.svg";

import Select from "../../shared/Select";
import InputDropdown from "../../shared/InputDropdown";
import Input from "../../shared/Input";
import Button from "../../shared/Button";

export default function ProxyPopupText() {
  return (
    <div className="popup-container">
      <div className="popup proxy-popup-text">
        <div className="close">
          <img src={cross} alt="✕" />
        </div>
        <h2>Import proxy files</h2>
        <Select
          options={[{ title: "File" }, { title: "Text", state: "selected" }]}
        />
        <div className="protocol">
          <InputDropdown title="Protocol" options={["https"]} />
        </div>
        <InputDropdown title="Proxy list" options={["Proxy 1"]} />
        <div className="ip">
          <Input title="Adress" />
          <Input title="Port" />
        </div>
        <Input title="Login" type="email" />
        <Input title="Password" type="password" />
        <Button class="main" text="Import" />
      </div>
    </div>
  );
}
