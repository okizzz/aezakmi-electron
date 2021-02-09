import React from "react";

import { NavLink } from "react-router-dom";
import { useRouter } from "../../../hooks";

import { SectionSelectComponent, SelectOption, IconContainer } from "./styles";

interface IProps {
  options: any[];
}

const SectionSelect = ({ options }: IProps) => {
  const { location } = useRouter();
  return (
    <SectionSelectComponent>
      {options.map((option) => {
        return (
          <NavLink to={`/${option.title.toLowerCase()}/dashboard`}>
            <SelectOption
              active={location.pathname.includes(option.title.toLowerCase())}
              key={option.title}
            >
              <IconContainer>
                <img src={option.icon} alt="option.icon" />
              </IconContainer>
              {option.title}
            </SelectOption>
          </NavLink>
        );
      })}
    </SectionSelectComponent>
  );
};

export default SectionSelect;
