import React from "react";

import star from "../../../assets/icn_star.svg";
import info from "../../../assets/icn_info.svg";
import edit from "../../../assets/icn_edit.svg";
import move from "../../../assets/icn_move.svg";

import { Checkbox, Button } from "../../";
import {
  FolderContainer,
  Checkbox as CheckboxContainer,
  FolderContent,
  Users,
  Title,
  Amount,
  Names,
  FingerprintNumber,
  Controls,
} from "./styles";

interface IProps {
  folder: any;
}

const FolderItem: React.FC<IProps> = (props) => {
  return (
    <FolderContainer>
      <CheckboxContainer>
        <Checkbox />
      </CheckboxContainer>
      <FolderContent>
        <Title>{props.folder.title}</Title>
        <FingerprintNumber>{props.folder.fingerprints}</FingerprintNumber>
        <Users>
          <Amount>{props.folder.users.length}</Amount>
          <div className="images">
            {props.folder.users.splice(0, 3).map((user: any) => {
              return <img src={user.avatar} alt="" />;
            })}
          </div>
          {/* <Names>
            {props.folder.users
              .map((user: any) => {
                return user.name;
              })
              .join(", ")}
          </Names> */}
        </Users>
        <Controls>
          <Button icon={star} />
          <Button icon={info} />
          <Button icon={edit} />
          <Button icon={move} />
        </Controls>
      </FolderContent>
    </FolderContainer>
  );
};

export default FolderItem;
