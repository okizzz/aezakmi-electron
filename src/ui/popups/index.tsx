import React from "react";

import cross from "../../assets/icn_cross.svg";

import { Input, Button } from "..";

interface IProps {
  handleClose: () => void;
  handleButtonCLick: () => void;
  title: string;
  isShow: boolean;
}

const PopupContainer: React.FC<IProps> = (props) => {
  const { handleClose, handleButtonCLick, title, isShow } = props;
  if (!isShow) return null;
  return (
    <div className="popup-container">
      <div className="popup filter">
        <div onClick={handleClose} className="close">
          <img src={cross} alt="✕" />
        </div>
        <h2>{title}</h2>

        {props.children}

        <Button onClick={handleButtonCLick} text="Create" />
      </div>
    </div>
  );
};

export default PopupContainer;
