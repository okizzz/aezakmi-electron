import "./EditCookie.scss";

import cross from "../../assets/icn_cross.svg";

import Select from "../../shared/Select";
import TextArea from "../../shared/TextArea";
import Input from "../../shared/Input";
import Button from "../../shared/Button";

export default function EditCookie() {
  return (
    <div className="popup-container">
      <div className="popup edit-cookie">
        <div className="close">
          <img src={cross} alt="✕" />
        </div>
        <h2>Edit Cookie</h2>
        <Select
          options={[
            { title: "JSON" },
            { title: "Netscape", state: "selected" },
          ]}
        />
        <TextArea title="Cookie" rows="5" />
        <Input title="Note" />
        <Button class="main" text="Save" />
      </div>
    </div>
  );
}
