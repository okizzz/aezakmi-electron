import React from "react";

import { Checkbox, Button } from "../";

import search from "../../assets/icn_search.svg";
import options from "../../assets/icn_options.svg";
import trash from "../../assets/icn_trash.svg";
import plus from "../../assets/icn_plus.svg";

import {
  FoldersComponent,
  TitleContainer,
  Title,
  Buttons,
  AddContainer,
  FingerprintNumber,
  Users,
} from "./styles";

import FolderItem from "./folder-item";
import CreateNewFolder from "../popups/NewFolder";

interface IProps {
  title: string;
  folders: any[];
  updateFolders: (e: any) => void;
}

const FoldersList: React.FC<IProps> = (props) => {
  const [show, setIsShow] = React.useState<boolean>(false);
  const handleSetShow = () => setIsShow(!show);

  return (
    <div>
      <FoldersComponent>
        <TitleContainer>
          <div className="checkbox">
            <Checkbox />
          </div>
          <Title>
            <h2>{props.title}</h2>
            <FingerprintNumber>Fingerprints</FingerprintNumber>
            <Users>Users</Users>
            <Buttons>
              <Button icon={search} />
              <Button icon={options} />
              <Button icon={trash} />
            </Buttons>
          </Title>
        </TitleContainer>
        {props.folders.map((folder) => {
          return <FolderItem folder={folder} />;
        })}
        <CreateNewFolder
          handleSetShow={handleSetShow}
          createFolder={props.updateFolders}
          show={show}
        />
        <AddContainer>
          <Button onClick={handleSetShow} icon={plus} />
        </AddContainer>
      </FoldersComponent>
    </div>
  );
};

export default FoldersList;
