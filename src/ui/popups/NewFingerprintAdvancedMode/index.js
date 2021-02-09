import "./NewFingerprintAdvancedMode.scss";

import cross from "../../assets/icn_cross.svg";

import Input from "../../shared/Input";
import Button from "../../shared/Button";

export default function NewFingerprintAdvancedMode() {
  return (
    <div className="popup-container">
      <div className="popup new-fingerprint-advanced-mode">
        <div className="close">
          <img src={cross} alt="✕" />
        </div>
        <h2>Advanced mode</h2>
        <div className="content-container">
          <div className="sections">
            <div className="section selected">Navigator WebKit</div>
            <div className="section">Hard</div>
            <div className="section">Display</div>
            <div className="section">WebGl & Canvas</div>
            <div className="section">Overlay noise</div>
          </div>
          <vr />
          <div className="content">
            <Input title="User agent" />
            <Input title="App name" />
            <Input title="App code name" />
            <Input title="App version" />
            <Input title="Product" />
            <Input title="Product sub" />
            <Input title="Platform" />
            <Input title="Vendor" />
            <Input title="Vendor sub" />
            <Input title="Build ID (Firefox only)" />
            <Input title="Oscpu (Firefox only)" />
          </div>
        </div>
        <Button class="main" text="Save" />
      </div>
    </div>
  );
}
