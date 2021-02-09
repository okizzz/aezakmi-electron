import React from "react";

import cross from "../../../assets/icn_cross.svg";

import { Input } from "../../";

const SearchPopup = () => {
  const [title, setTitle] = React.useState<string>("");
  const handleSetTextInput = (e: any) => setTitle(e.target.value);
  return (
    <div className="popup-container">
      <div className="popup filter">
        <div className="close">
          <img src={cross} alt="✕" />
        </div>
        <h2>Search</h2>
        <Input onChange={handleSetTextInput} title={title} name="search" />
      </div>
    </div>
  );
};

export default SearchPopup;
