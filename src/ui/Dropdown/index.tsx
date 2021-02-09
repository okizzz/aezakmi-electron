import React from "react";

import { Dropdown as DropdownComponent, DropdownOption } from "./styles";

const Dropdown = (props: any) => {
  return (
    <DropdownComponent>
      {props.options.map((option: any) => {
        return (
          <DropdownOption
            key={option.title}
            className={["dropdown-option", option.state].join(" ")}
          >
            {option.title}
          </DropdownOption>
        );
      })}
    </DropdownComponent>
  );
};

export default Dropdown;
