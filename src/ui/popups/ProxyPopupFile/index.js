import "./ProxyPopupFile.scss";

import cross from "../../assets/icn_cross.svg";
import cloud from "../../assets/icn_cloud.svg";

import Select from "../../shared/Select";
import Button from "../../shared/Button";

export default function ProxyPopupFile() {
  return (
    <div className="popup-container">
      <div className="popup proxy-popup-file">
        <div className="close">
          <img src={cross} alt="✕" />
        </div>
        <h2>Import proxy files</h2>
        <Select
          options={[{ title: "File", state: "selected" }, { title: "Text" }]}
        />
        <div className="drag-and-drop">
          <img src={cloud} alt="" />
          <p>
            Drag & drop or click to <span className="text-3">browse</span>
          </p>
        </div>
        <Button class="main" text="Import" />
      </div>
    </div>
  );
}
