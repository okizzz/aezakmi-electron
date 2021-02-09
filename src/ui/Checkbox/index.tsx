import React from "react";
import { CheckboxComponent } from "./styles";

const Checkbox = (props: any) => {
  return (
    <CheckboxComponent>
      <input
        type="checkbox"
        name={props.name}
        id={props.name}
        value={props.value}
      />
      <label htmlFor={props.name} className="text-2">
        {props.value}
      </label>
    </CheckboxComponent>
  );
};

export default Checkbox;
