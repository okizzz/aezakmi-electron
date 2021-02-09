import "./ShareFingerprint.scss";

import cross from "../../assets/icn_cross.svg";

import Input from "../../shared/Input";
import Checkbox from "../../shared/Checkbox";
import Button from "../../shared/Button";

export default function ShareFingerprint(props) {
  return (
    <div className="popup-container">
      <div className="popup share-fingerprint">
        <div className="close">
          <img src={cross} alt="✕" />
        </div>
        <h2>{props.title}</h2>
        <Input title="Share with" />
        <p className="text-3">Attach</p>
        <Checkbox name="cookie" value="Cookie" />
        <Checkbox name="proxy" value="Proxy" />
        <Button class="main" text="Send" />
      </div>
    </div>
  );
}
