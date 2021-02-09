import React from "react";
// import "./EditAccount.scss";

import cross from "../../assets/icn_cross.svg";
import camera from "../../assets/icn_camera.svg";
import person from "../../assets/dev_person.svg";

import { Input, Button } from "../../ui";

const EditAccount = () => {
  const handleChangeInput = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <div className="popup-container">
      <div className="popup edit-account">
        <div className="close">
          <img src={cross} alt="✕" />
        </div>
        <h2>Edit account</h2>
        <div className="avatar-container">
          <img src={camera} alt="camera" className="camera" />
          <img src={person} alt="avarat" className="avatar" />
        </div>
        <Input onChange={handleChangeInput} title="Name" name="Name" />
        <Input
          onChange={handleChangeInput}
          title="Email"
          type="email"
          name="Name"
        />
        <Input
          onChange={handleChangeInput}
          title="Password"
          type="password"
          name="Name"
        />
        <Button text="Save" />
      </div>
    </div>
  );
};

export default EditAccount;
